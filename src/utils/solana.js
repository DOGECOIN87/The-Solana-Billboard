import { Connection, clusterApiUrl } from '@solana/web3.js';
import { Metaplex, walletAdapterIdentity, bundlrStorage } from '@metaplex-foundation/js';

export const saveToBlockchain = async (wallet, file) => {
  try {
    const connection = new Connection(clusterApiUrl('devnet'));
    const metaplex = Metaplex.make(connection)
      .use(walletAdapterIdentity(wallet))
      .use(bundlrStorage());

    const { uri } = await metaplex.nfts().uploadMetadata({
      name: 'Billboard Design',
      description: 'A user-created billboard design',
      image: file
    });

    const { nft } = await metaplex.nfts().create({
      uri,
      name: 'Billboard Design NFT',
      sellerFeeBasisPoints: 0
    });

    return nft;
  } catch (error) {
    console.error('Error saving to blockchain:', error);
    throw error;
  }
};
