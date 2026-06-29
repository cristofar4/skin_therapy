'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Ambient luxury particle field rendered with vanilla Three.js (no react
 * reconciler) for maximum runtime stability. Soft champagne particles drift
 * gently behind the content, with subtle parallax toward the cursor.
 */
export function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const mount = mountRef.current;
    if (!mount) return;

    const width = () => mount.clientWidth;
    const height = () => mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width() / height(), 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setSize(width(), height());
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Particles
    const count = window.innerWidth < 768 ? 380 : 720;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: new THREE.Color('#C9A86A'),
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const light = new THREE.PointLight(0xdcc290, 0.8);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    // Pointer parallax
    const pointer = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', onMove);

    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      points.rotation.y += 0.0018;
      points.rotation.x += 0.0006;
      points.position.y = Math.sin(t * 0.2) * 0.25;
      camera.position.x += (pointer.x - camera.position.x) * 0.04;
      camera.position.y += (-pointer.y - camera.position.y) * 0.04;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = width() / height();
      camera.updateProjectionMatrix();
      renderer.setSize(width(), height());
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 z-0 opacity-70" />;
}
