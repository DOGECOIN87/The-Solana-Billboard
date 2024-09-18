import React, { useEffect, useRef } from 'react';
import { Fabric } from 'fabric';

function CanvasDraw({ updateTexture }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = new Fabric.Canvas('canvas', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Add drawing tools, event listeners, etc.

    canvasRef.current = canvas;

    return () => {
      canvas.dispose();
    };
  }, []);

  const handleSave = () => {
    updateTexture(canvasRef.current);
  };

  return (
    <div>
      <canvas id="canvas" />
      <button onClick={handleSave}>Update Billboard</button>
    </div>
  );
}

export default CanvasDraw;

