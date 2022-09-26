import {Box, Center, Flex, Text} from "@chakra-ui/react";
import {Finance} from "./svg/sidebar/accounts/Finance";
import {Service} from "./svg/sidebar/accounts/Service";
import {Profile} from "./svg/sidebar/accounts/Profile";

export const AccountHiddenList = ({visible}) => {
    let display = (visible === true) ? "" : "none"
    return (
        <Box display={display} fontSize={'14px'} fontWeight={'400'} bg={'blue.second'}>
            <Flex h={'35px'} w={'100%'}
                  _hover={{
                      bg: 'blue.sidebar',
                      cursor: 'pointer'
                  }}
            >
                <Center ml={'35px'}>
                    <Profile/>
                </Center>
                <Center ml={'17px'}>
                    <Text color='white.pure' fontSize={'14px'}>Профиль</Text>
                </Center>
            </Flex>
            <Flex h={'35px'} w={'100%'}
                  _hover={{
                      bg: 'blue.sidebar',
                      cursor: 'pointer'
                  }}

            >
                <Center ml={'35px'}>
                    <Finance/>
                </Center>
                <Center ml={'17px'}>
                    <Text color='white.pure' fontSize={'14px'}>Финансы</Text>
                </Center>
            </Flex>
            <Flex h={'35px'} w={'100%'}
                  _hover={{
                      bg: 'blue.sidebar',
                      cursor: 'pointer'
                  }}

            >
                <Center ml={'35px'}>
                    <Service/>
                </Center>
                <Center ml={'18px'}>
                    <Text color='white.pure' fontSize={'14px'}>Услуги</Text>
                </Center>
            </Flex>
        </Box>
    )
}