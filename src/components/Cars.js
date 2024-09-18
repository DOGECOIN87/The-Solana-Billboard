import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Cars() {
  const car1 = useRef();
  const car2 = useRef();

  useFrame(() => {
    if (car1.current) {
      car1.current.position.x += 0.05;
      if (car1.current.position.x > 25) car1.current.position.x = -25;
    }
    if (car2.current) {
      car2.current.position.x -= 0.05;
      if (car2.current.position.x < -25) car2.current.position.x = 25;
    }
  });

  return (
    <>
      <mesh ref={car1} position={[-25, 0.5, -2]}>
        <boxGeometry args={[1, 1, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={car2} position={[25, 0.5, 2]}>
        <boxGeometry args={[1, 1, 2]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}

export default Cars;

