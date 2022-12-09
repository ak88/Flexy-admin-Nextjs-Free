import React from "react";
import { useEffect } from 'react'
import { 
  init, 
  AUTH_PROVIDERS, 
  CHAIN, 
  THEME, 
  WALLET_PROVIDER, 
  SUPPORTED_ETHEREUM_NETWORKS 
} from '@ramper/ethereum'
import { getWalletModel, User } from '@ramper/core'
import { ethers } from '@ethers'

import {
  Box,
  Menu,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";

const injected = injectedModule()

init({
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum',
      rpcUrl: 'https://mainnet.infura.io/v3/${infuraKey}'
    }
  ]
 })

 //Block native version

const ConnectWallet = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

    return (
      <>
      <div>
      <Button
        disabled={connecting}
        onClick={() => (wallet ? disconnect({label: wallet.label}) : connect())}
      >
        {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
      </Button>
    </div>
    </>
    )
  }
  export default ConnectWallet;