import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
  background: rgba(0,0,0,0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function Menu() {
  return (
    <MenuContainer>
      <h2>The Solana Billboard Menu</h2>
      <button>Draw</button>
      <button>Upload Media</button>
      <button>Text Input</button>
      <button>Color & Effects</button>
      <button>Save to Blockchain</button>
    </MenuContainer>
  );
}

export default Menu;

