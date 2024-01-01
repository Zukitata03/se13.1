import { Button, ButtonProps } from "@chakra-ui/react";
import { IdProps } from "@chakra-ui/react-types";
import React from "react";

interface IProp extends ButtonProps{

}

export default function ConnectWallet({...props} : IdProps) {

    return <Button variant="primary" {...props}>Connect wallet</Button>
}