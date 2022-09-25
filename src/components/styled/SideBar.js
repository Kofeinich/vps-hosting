import {
    Flex,
    Box,
    VStack, Text, Center,
} from '@chakra-ui/react'
import {LogoWeb} from "./svg/LogoWeb";
import {MenuIcon} from "./svg/MenuIcon";
import {VPS} from "./svg/sidebar/VPS";
import {Account} from "./svg/sidebar/accounts/Account";
import {Servers} from "./svg/sidebar/Servers";
import {Monitoring} from "./svg/sidebar/Monitoring";
import {Domains} from "./svg/sidebar/domains/Domains";
import {SSL} from "./svg/sidebar/SSL";
import {Shop} from "./svg/sidebar/Shop";
import {Seo} from "./svg/sidebar/Seo";
import {Help} from "./svg/sidebar/Help";
import {Idea} from "./svg/sidebar/Idea";

export const SideBar = () => {
    return (
        <Box as={'aside'} bg={'blue.second'}
             w={'211px'} fontWeight={'700'}
             position={'fixed'}
             zIndex={1000}
             overflowY={'auto'}
             top={0} left={0}
             h={'100%'} minH={'600px'}
        >
            <Box position={'absolute'} w={'100%'}>
                <Flex as={'header'} w={'100%'} h={'88px'} justify={'space-between'} pt={'21px'} pr={'18px'} pl={'20px'}>
                    <LogoWeb/>
                    <Box pt={'3px'}>
                        <MenuIcon color={'white.pure'}/>
                    </Box>
                </Flex>
                <VStack
                    align={'left'}
                >
                    <Flex h={'40px'} w={'100%'}>
                        <Center ml={'23px'}>
                            <VPS/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>Заказать VPS</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}>
                        <Center ml={'23px'}>
                            <Account/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>АККАУНТ</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}>
                        <Center ml={'23px'}>
                            <Servers/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>СЕРВЕРЫ</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}>
                        <Center ml={'23px'}>
                            <Monitoring/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>МОНИТОРИНГ</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}>
                        <Center ml={'23px'}>
                            <Domains/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>ДОМЕНЫ</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}>
                        <Center ml={'23px'}>
                            <SSL/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>SSL</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}>
                        <Center ml={'23px'}>
                            <Shop/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>МАГАЗИН</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}>
                        <Center ml={'23px'}>
                            <Seo/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>SEO И РЕКЛАМА</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}>
                        <Center ml={'23px'}>
                            <Help/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>ПОДДЕРЖКА</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}>
                        <Center ml={'23px'}>
                            <Idea/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>ЕСТЬ ИДЕЯ</Text>
                        </Center>
                    </Flex>

                </VStack>
            </Box>
        </Box>
    )
}