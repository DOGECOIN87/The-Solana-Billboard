import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

function CanvasDraw({ updateTexture, onClose }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
    canvas.freeDrawingBrush.color = 'black';

    canvasRef.current = canvas;

    const resizeCanvas = () => {
      canvas.setWidth(window.innerWidth);
      canvas.setHeight(window.innerHeight);
      canvas.renderAll();
    };

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.dispose();
    };
  }, []);

  const handleSave = () => {
    const dataURL = canvasRef.current.toDataURL({
      format: 'png',
      quality: 0.8
    });
    updateTexture(dataURL);
    onClose();
  };

  return (
    <CanvasContainer>
      <canvas id="canvas" />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </CanvasContainer>
  );
}

export default CanvasDraw;
