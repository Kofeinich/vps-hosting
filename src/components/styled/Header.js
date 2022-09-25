import {Flex, Box, Text, Center} from '@chakra-ui/react'
import React from "react";
import {MenuIcon} from "./svg/MenuIcon";

export const Header = () => {
    return (
        <Flex as={'header'} h={'60px'} w={'100vw'}
              fontSize={'12px'} minW={'375px'}
              bg={'white.second'} justify={'space-between'}
        >
            <Center ml={['20px', '20px', '16px', '40px']}>
                <MenuIcon/>
            </Center>

            <Flex justify={'right'}>
                <Center>
                    <Text color='gray.100' mr={'34.5px'}>3467 ₽</Text>
                </Center>
                <Center>
                    <Text color='gray.100' mr={'10.5px'}>kol</Text>
                </Center>
                <Center>
                    <Text color='gray.100' mr={'24px'}>username</Text>
                </Center>
                <Center>
                    <Text color='gray.100' mr={['20px', '20px', '16px', '40px']}>Выйти</Text>
                </Center>
            </Flex>
        </Flex>
    )
}