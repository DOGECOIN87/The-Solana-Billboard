import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Menu from './Menu';
import CanvasDraw from './CanvasDraw';
import { gsap } from 'gsap';

function Billboard() {
  const mesh = useRef();
  const { camera } = useThree();
  const [isZoomed, setIsZoomed] = useState(false);
  const [texture, setTexture] = useState(null);

  const handleBillboardClick = () => {
    if (!isZoomed) {
      setIsZoomed(true);
      gsap.to(camera.position, {
        x: mesh.current.position.x,
        y: mesh.current.position.y,
        z: mesh.current.position.z + 0.5,
        duration: 1
      });
    }
  };

  const handleClose = () => {
    setIsZoomed(false);
    gsap.to(camera.position, {
      x: 0,
      y: 5,
      z: 15,
      duration: 1
    });
  };

  const updateTexture = (dataURL) => {
    const loader = new TextureLoader();
    loader.load(dataURL, (tex) => {
      setTexture(tex);
    });
  };

  useFrame(() => {
    if (texture && mesh.current) {
      mesh.current.material.map = texture;
      mesh.current.material.needsUpdate = true;
    }
  });

  return (
    <>
      <mesh
        ref={mesh}
        position={[0, 5, -10]}
        onClick={handleBillboardClick}
        castShadow
      >
        <planeGeometry args={[10, 5]} />
        <meshBasicMaterial color="white" />
      </mesh>
      {isZoomed && (
        <>
          <CanvasDraw updateTexture={updateTexture} onClose={handleClose} />
          <Menu />
        </>
      )}
    </>
  );
}

export default Billboard;
