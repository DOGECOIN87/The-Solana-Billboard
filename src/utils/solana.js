import { Connection, clusterApiUrl } from '@solana/web3.js';
import { actions } from '@metaplex/js';

const { mintNFT } = actions;

export const saveToBlockchain = async (wallet, metadata) => {
  const connection = new Connection(clusterApiUrl('devnet'));
  const { nft } = await mintNFT({
    connection,
    wallet,
    uri: metadata.uri,
    maxSupply: 1
  });
  return nft;
};

