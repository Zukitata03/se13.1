import { Box, Image, Text, Button, HStack, Spinner } from "@chakra-ui/react";
import React from "react";
import { numberFormat } from "../../../utils";
import { IPackage, IWalletInfo } from "../../../_types_";

interface IProps {
  pak: IPackage;
  isBuying: boolean;
  rate: number;
  walletInfo?: IWalletInfo;
  onBuy?: () => void;
}

export default function InvestCard({
  pak,
  isBuying,
  rate,
  walletInfo,
  onBuy,
}: IProps) {
  return (
    <Box
      w="380px"
      bg="bg.secondary"
      borderRadius="16px"
      overflow="hidden"
      padding="10px"
      border="1px solid rgba(254,223,86,.6)"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <Box
        bgImage={`/${pak.bg}`}
        w="full"
        h="210px"
        borderRadius="16px"
        bgSize="cover"
        bgPos="center"
      />

    <Box
        w="120px"
        h="120px"
        margin="0px auto"
        borderRadius="full"
        marginTop="-60px"
        position="relative"
      >
        <Image
          src={`/${pak.icon}`}
          alt="bnb"
          w="120px"
          h="120px"
          borderRadius="full"
          objectFit="cover"
          border="6px solid rgba(254,223,86,.6)"
        />
      </Box>

      <Text my="20px" fontSize="24px" fontWeight="bold">
        {pak.name }
      </Text>
      <Box as="button"
        disabled
        outline="bold"
        my="20px"
        bg="transparent"
        border="3px solid"
        borderColor="yellow.400"
        color="white.300"
        fontSize="20px"
      >
        <Text fontWeight="bold" m="10px">{pak.amount} DHA</Text>
      </Box>
      <HStack my="15px">
        <Text color="gray">Amount of coins to pay: </Text>
        <Text variant="notoSan" fontSize="16px">
          {numberFormat(pak.amount / rate)} {pak.token}
        </Text>
      </HStack>

      <Button as="button" w="full" backgroundColor="yellow.500" 
        //disabled={!walletInfo?.address || isBuying} 
        onClick={onBuy}>
        {isBuying ? <Spinner fontWeight="bold"/> : 'Buy Now'}        
      </Button>

    </Box>
  );
}