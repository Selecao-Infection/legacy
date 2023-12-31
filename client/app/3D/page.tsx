"use client"
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const page: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create Three.js scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;

      // Create a cube and add it to the scene
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({color: 0xff0000});
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Render the scene and camera
      renderer.render(scene, camera);

      const renderScene = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };

      // Start the animation loop
      renderScene();

      // Handle window resize
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return <div ref={containerRef} />;
};

export default page;
