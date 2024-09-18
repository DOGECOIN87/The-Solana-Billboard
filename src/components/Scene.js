import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Billboard from './Billboard';
import Highway from './Highway';
import Cars from './Cars';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Billboard />
        <Highway />
        <Cars />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;

