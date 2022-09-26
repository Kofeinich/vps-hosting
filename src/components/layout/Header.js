import {Flex, Text, Center, } from '@chakra-ui/react'
import React from "react";
import {MenuIcon} from "../styled/svg/MenuIcon";
import {Notice} from "../styled/svg/Notice";

export const Header = () => {

    return (
        <Flex as={'header'} h={'60px'} w={'100%'}
              fontSize={'12px'} minW={'375px'}
              bg={'white.second'} justify={'space-between'}
        >
            <Flex w={'100%'} justify={'right'}>
                <Center>
                    <Text color='gray.100' mr={'34.5px'}>3467 ₽</Text>
                </Center>
                <Center mr={'10.5px'}>
                    <Notice/>
                </Center>
                <Center>
                    <Text color='gray.100' mr={'24px'}>username</Text>
                </Center>
                <Center>
                    <Text color='gray.100' mr={['0px', '0px', '0px', '20px']}>Выйти</Text>
                </Center>
            </Flex>
        </Flex>
    )
}