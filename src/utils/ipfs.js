import { create } from 'ipfs-http-client';

const client = create('https://ipfs.infura.io:5001/api/v0');

export const uploadToIPFS = async (file) => {
  const added = await client.add(file);
  return `https://ipfs.infura.io/ipfs/${added.path}`;
};

