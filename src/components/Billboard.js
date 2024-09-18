import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshBasicMaterial, TextureLoader } from 'three';
import Menu from './Menu';
import CanvasDraw from './CanvasDraw';
import { gsap } from 'gsap';

function Billboard() {
  const mesh = useRef();
  const [isZoomed, setIsZoomed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [texture, setTexture] = useState(null);

  const handleBillboardClick = () => {
    setIsZoomed(true);
    setShowMenu(true);
    gsap.to(mesh.current.position, {
      z: 0,
      duration: 1,
      onComplete: () => {
        // Overlay CanvasDraw and Menu
      }
    });
  };

  const updateTexture = (canvas) => {
    const newTexture = new TextureLoader().load(canvas.toDataURL());
    setTexture(newTexture);
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
      >
        <planeGeometry args={[10, 5]} />
        <meshBasicMaterial color="white" />
      </mesh>
      {isZoomed && (
        <>
          <CanvasDraw updateTexture={updateTexture} />
          <Menu />
        </>
      )}
    </>
  );
}

export default Billboard;

