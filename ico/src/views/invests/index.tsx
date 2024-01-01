declare var window: any;
import React from 'react'
import { Flex, Heading, SimpleGrid, Spacer, useDisclosure } from '@chakra-ui/react'
import { ConnectWallet, SuccessModal, WalletInfo } from '../../components'
import { IPackage, IRate, IWalletInfo, TOKEN } from '../../_types_'
import { ethers } from 'ethers';
import { packages } from '../../constants';
import InvestCard from './components/InvestCard';
import CrowSaleContract from '../../contracts/CrowdSaleContract';
import T1Contract from '../../contracts/T1Contract';


export default function InvestView() {
    const [wallet, setWallet] = React.useState<IWalletInfo>()
    const [web3Provider, setWeb3Provider] = React.useState<ethers.providers.Web3Provider>();
    const [rate, setRate] = React.useState<IRate>({bnbRate: 0, t1Rate: 0});
    const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
    /* Hook lưu trữ pakage mà user đang chọn */
    const [pak, setPak] = React.useState<IPackage>();
    const [txHash, setTxHash] = React.useState<string>();
    const {isOpen, onClose, onOpen} = useDisclosure();

    const getRate = React.useCallback(async() => {
        const crowdContract = new CrowSaleContract();
        const bnbRate = await crowdContract.getBnbRate();
        const t1Rate = await crowdContract.getT1Rate();

        /* Thực hiện check dữ liệu */
        /* console.log({bnbRate, t1Rate}); */
        setRate({bnbRate, t1Rate});
    }, []);

    /* Lấy tỉ giá lần đầu */
    React.useEffect(() => {
        getRate();
    }, [getRate]);

    const onConnectMetamask = async() => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            /* Đợi user connect wallet và lấy thông tin ví */
            await provider.send("eth_requestAccounts", []);
            /* Lấy ra ví mà user đã sign => Để connect với UI */
            const signer = provider.getSigner();
            /* Lấy ra thông tin còn lại của ví */
            const address = await signer.getAddress();
            const bigBalance = await signer.getBalance();
            const bnbBalance = Number.parseFloat(
                ethers.utils.formatEther(bigBalance)
            );
            setWallet({ address, bnb: bnbBalance });
            setWeb3Provider(provider);
        }
    }

    /* Handle event chọn mua package */
    const handleBuyIco = async(pk: IPackage) => {
        /*Check user đã connect wallet thành công chưa */
        if (!web3Provider) return;
         setPak(pk);
         setIsProcessing(true)
         let hash = '';
         const crowdContract = new CrowSaleContract(web3Provider);
         if (pk.token === TOKEN.T1) {
            const t1Contract = new T1Contract(web3Provider);
            await t1Contract.approve(crowdContract._contractAddress, pk.amount / rate.bnbRate);
            hash = await crowdContract.buyTokenByT1(pk.amount);
         } else {
            hash = await crowdContract.buyTokenByBNB(pk.amount);
         }
         setTxHash(hash);
         onOpen();
        try {
        
        } catch(er: any) {
        }
        setPak(undefined);
        setIsProcessing(false);
    }

    return (
        <Flex
        w={{ base: "full", lg: "70%" }}
        flexDirection="column"
        margin="50px auto"
        >
            <Flex>
                <Heading size="lg" fontWeight="bold">
                    Blockchain Trainee
                </Heading>
                <Spacer />
                {!wallet && <ConnectWallet onClick={onConnectMetamask} />}
                {wallet &&
                <WalletInfo
                    address={wallet?.address}
                    amount={wallet?.bnb || 0}
                />}
            </Flex>
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
                title="BUY ICO" 
            />
        </Flex>
    )
}