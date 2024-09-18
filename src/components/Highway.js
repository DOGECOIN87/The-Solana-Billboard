import React from 'react';

function Highway() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

export default Highway;

