declare var window: any;
import { ConnectWallet, DisConnectWallet, WalletInfo } from "@/components";
import { setWalletInfo, setWeb3Provider, disconnectWallet } from "@/reduxs/accounts/account.slices";
import { useAppDispatch, useAppSelector } from "@/reduxs/hooks";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { ethers } from "ethers"; 
import { useRouter } from "next/router";
import React, {ReactNode} from 'react';

interface IProps {
  children: ReactNode;
}

export default function MainLayout({children}: IProps) {
  const router = useRouter();
  console.log(router.pathname)

  const dispatch = useAppDispatch();
  const {wallet} = useAppSelector((state) => state.account);

  const onConnectMetamask = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        undefined
      );
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const bigBalance = await signer.getBalance();
      const bnbBalance = Number.parseFloat(
        ethers.utils.formatEther(bigBalance)
      );
      dispatch(setWalletInfo({ address, bnb: bnbBalance }));
      dispatch(setWeb3Provider(provider));
    }
  };

  return (
    <Flex
      w={{ base: "full", lg: "70%" }}
      flexDirection="column"
      margin="50px auto"
    >
      <Flex w="full" alignItems="center" justifyContent="center">
        <Heading size="lg" fontWeight="bold">
          BLOCKCHAIN SE2023 13.1
        </Heading>
        <Spacer />
        {!wallet ? (
          <ConnectWallet onClick={onConnectMetamask} />
        ) : (
          <>
            <WalletInfo address={wallet?.address} amount={wallet?.bnb || 0} />
            <DisConnectWallet onClick={() => dispatch(disconnectWallet())} /> 
          </>
        )}

      </Flex>
      <Flex w="full" flexDirection="column" py="50px">
         {children}
      </Flex>     
    </Flex>
  );
}