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






  const Gallery = () => {

  const { contract } = useContract("0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D");
  const { data: nfts, isLoading: loading } = useNFTs(contract?.nft, {
    start: 0,
    count: 10,
  });

  console.log(nfts)
  const truncateAddress = (address) => {
    return (
      address.substring(0, 6) + "..." + address.substring(address.length - 4)
    );
  };

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