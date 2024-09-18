import React from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets';
import Scene from './components/Scene';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/globalStyles';

require('@solana/wallet-adapter-react-ui/styles.css');

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = 'https://api.devnet.solana.com';

  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new TorusWalletAdapter()
  ];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div className="App">
              <header>
                <h1>The Solana Billboard</h1>
                <WalletMultiButton />
              </header>
              <Scene />
            </div>
          </ThemeProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
