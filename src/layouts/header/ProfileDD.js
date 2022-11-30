import React from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import userimg from "../../../assets/images/users/user2.jpg";
import { ConnectWallet } from "@thirdweb-dev/react";

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


const ProfileDD = () => {

  return (
    <>
    <ConnectWallet accentColor="#f213a4" colorMode="dark" />
  
    </>
  );
};

export default ProfileDD;
