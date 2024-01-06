declare var window: any;
import React from "react";
import { Flex, Heading, SimpleGrid, Spacer, useDisclosure } from "@chakra-ui/react";
import { SuccessModal, WalletInfo } from "../../components";
import { IPackage, IRate, IWalletInfo, TOKEN } from "../../_types_";
import { ethers } from "ethers";
import { packages } from "../../constants";
import InvestCard from "./components/InvestCard";
import CrowSaleContract from "../../contracts/CrowdSaleContract";
import UsdtContract from "../../contracts/T1Contract"; 
import { useAppSelector } from '../../reduxs/hooks';

export default function InvestView() {
  const [wallet, setWallet] = React.useState<IWalletInfo>();
  const [rate, setRate] = React.useState<IRate>({bnbRate: 0, t1Rate: 0});
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [pak, setPak] = React.useState<IPackage>();
  const [txHash, setTxHash] = React.useState<string>();
  const {isOpen, onClose, onOpen} = useDisclosure();

  const {web3Provider} = useAppSelector(p => p.account);

  const getRate = React.useCallback(async() => {
    const crowdContract = new CrowSaleContract();
    const bnbRate =  await crowdContract.getBnbRate();
    const t1Rate = await crowdContract.getT1Rate();  
    setRate({bnbRate, t1Rate});

  }, []);

  React.useEffect(() => {
    getRate();
  }, [getRate]);

  const handleBuyIco = async(pk: IPackage) => {
    if (!web3Provider) return;
      setPak(pk);
      setIsProcessing(true);
      let hash ='';
      const crowdContract = new CrowSaleContract(web3Provider);
      if (pk.token === TOKEN.T1) {
        const usdtContract = new UsdtContract(web3Provider);
        await usdtContract.approve(crowdContract._contractAddress, pk.amount / rate.bnbRate);
        hash = await crowdContract.buyTokenByT1(pk.amount);
      } else {
        hash = await crowdContract.buyTokenByBNB(pk.amount);
      }
      setTxHash(hash);
      onOpen();

    setPak(undefined);
    setIsProcessing(false);
  }


  return (
    <>
      <SimpleGrid columns={{ base: 1, lg: 3 }} mt="50px" spacingY="20px">
        {packages.map((pk, index) => (
          <InvestCard
            pak={pk}
            key={String(index)}
            isBuying={isProcessing && pak?.key === pk.key}
            rate={pk.token === TOKEN.BNB ? rate.bnbRate : rate.t1Rate}
            walletInfo={wallet}
            onBuy={() => handleBuyIco(pk)}
          />
        ))}
      </SimpleGrid>

      <SuccessModal 
        isOpen={isOpen}
        onClose={onClose}
        hash={txHash}
        title="BUY TOKEN DHA COMPLETE, CLICK THIS HASH TO SEE MORE"
      />
    </>
  );
}