import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 250px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function Menu() {
  const handleUploadMedia = () => {
    // Implement media upload functionality
  };

  const handleAddText = () => {
    // Implement text input functionality
  };

  const handleColorEffects = () => {
    // Implement color and effects functionality
  };

  const handleSaveToBlockchain = () => {
    // Implement save to blockchain functionality
  };

  return (
    <MenuContainer>
      <h2>The Solana Billboard Menu</h2>
      <button>Draw</button>
      <button onClick={handleUploadMedia}>Upload Media</button>
      <button onClick={handleAddText}>Text Input</button>
      <button onClick={handleColorEffects}>Color & Effects</button>
      <button onClick={handleSaveToBlockchain}>Save to Blockchain</button>
    </MenuContainer>
  );
}

export default Menu;
