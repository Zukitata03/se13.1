import React from 'react'
import {Button, ButtonProps} from '@chakra-ui/react';

interface IProps extends ButtonProps {}
export default function DisConnectWallet({...props}: IProps) { 
    return <Button variant="primary" {...props}>DisConnect Wallet</Button>;
 
}