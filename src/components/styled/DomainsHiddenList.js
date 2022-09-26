import {Flex, Box, Text, Center,} from '@chakra-ui/react'
import {MyDomains} from "./svg/sidebar/domains/MyDomains";
import {DomainBonus} from "./svg/sidebar/domains/DomainBonus";
import {DomainPerson} from "./svg/sidebar/domains/DomainPerson";

export const DomainsHiddenList = ({visible}) => {
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
                    <MyDomains/>
                </Center>
                <Center ml={'14px'}>
                    <Text color='white.pure' fontSize={'14px'}>Мои домены</Text>
                </Center>
            </Flex>
            <Flex h={'35px'} w={'100%'}
                  _hover={{
                      bg: 'blue.sidebar',
                      cursor: 'pointer'
                  }}

            >
                <Center ml={'35px'}>
                    <DomainBonus/>
                </Center>
                <Center ml={'14px'}>
                    <Text color='white.pure' fontSize={'14px'}>Доменные бонусы</Text>
                </Center>
            </Flex>
            <Flex h={'35px'} w={'100%'}
                  _hover={{
                      bg: 'blue.sidebar',
                      cursor: 'pointer'
                  }}

            >
                <Center ml={'35px'}>
                    <DomainPerson/>
                </Center>
                <Center ml={'14px'}>
                    <Text color='white.pure' fontSize={'14px'}>Доменные персоны</Text>
                </Center>
            </Flex>
        </Box>
    )
}