import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#282c34',
    secondary: '#61dafb',
    background: '#ffffff',
    text: '#000000',
    accent: '#f0db4f'
  },
  fonts: ['sans-serif', 'Roboto'],
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts[0]};
    color: ${(props) => props.theme.colors.text};
  }
  .App {
    text-align: center;
  }
  header {
    background-color: ${(props) => props.theme.colors.primary};
    padding: 20px;
    color: white;
  }
`;
