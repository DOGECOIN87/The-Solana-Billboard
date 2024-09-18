import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader } from '@react-three/drei';
import Billboard from './Billboard';
import Highway from './Highway';
import Cars from './Cars';

function Scene() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 5, 15], fov: 60 }}
        style={{ height: '100vh', width: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Billboard />
          <Highway />
          <Cars />
        </Suspense>
        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} />
      </Canvas>
      <Loader />
    </>
  );
}

export default Scene;
