import {
    Grid,
    Button,
    Box,
    Stack,
    IconButton,
    Fab,
    ButtonGroup,
  } from "@mui/material";
  import {useAddress,useContract,useMetamask,useNFTs,} from "@thirdweb-dev/react";

  const { contract } = useContract("0x05B8aab3fd77580C29c6510d8C54D9E6be4262d2");

  const { data: nfts, isLoading: loading } = useNFTs(contract?.nft, {
    start: 0,
    count: 10,
  });

  const truncateAddress = (address) => {
    return (
      address.substring(0, 6) + "..." + address.substring(address.length - 4)
    );
  };

  const Gallery = () => {
    <>
    <div>
        {nfts && nfts?.length > 0 && (
            <div>
            {nfts.map((nft) => (
                <div key={nft.metadata.id.toString()}>
                <h1>{nft.metadata.name}</h1>
                <ThirdwebNftMedia metadata={nft.metadata} />
                <p>owned by {truncateAddress(nft.owner)}</p>
                </div>
            ))}
            </div>
        )}
        </div>
    </>
  };
  export default Gallery;