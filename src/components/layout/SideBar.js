import {
    Flex,
    Box,
    VStack, Text, Center,
} from '@chakra-ui/react'
import {LogoWeb} from "../styled/svg/LogoWeb";
import {MenuIcon} from "../styled/svg/MenuIcon";
import {VPS} from "../styled/svg/sidebar/VPS";
import {Account} from "../styled/svg/sidebar/accounts/Account";
import {Servers} from "../styled/svg/sidebar/Servers";
import {Monitoring} from "../styled/svg/sidebar/Monitoring";
import {SSL} from "../styled/svg/sidebar/SSL";
import {Shop} from "../styled/svg/sidebar/Shop";
import {Seo} from "../styled/svg/sidebar/Seo";
import {Help} from "../styled/svg/sidebar/Help";
import {Idea} from "../styled/svg/sidebar/Idea";
import {useDispatch, useSelector} from "react-redux";
import {clickOnSideBar} from "../services/redux/actions/actions";
import {Domains} from "../styled/svg/sidebar/domains/Domains";
import {DomainsHiddenList} from "../styled/DomainsHiddenList";
import {useState} from "react";
import {AccountHiddenList} from "../styled/AccountHiddenList";




export const SideBar = () => {

    const dispatch = useDispatch()
    const width = useSelector(state => {
        const {widthReducer} = state;
        return widthReducer.width;
    });
    console.log(width)


    const handleClick = () => {
        if (width.includes('211px')) {
            dispatch(clickOnSideBar('68px'))
        } else {
            dispatch(clickOnSideBar('211px'))
        }
    }
    const [domainVisible, setDomainVisible] = useState(false)

    const [accountVisible, setAccountVisible] = useState(false)

    return (
        <Box as={'aside'} bg={'blue.second'}
             w={width} fontWeight={'700'}
             position={'fixed'}
             zIndex={500}
             overflowY={'auto'}
             top={0} left={0}
             h={'100%'} minH={'600px'}
        >
            <Box position={'absolute'} w={'100%'}>
                <Flex as={'header'} w={'100%'} h={'84px'} justify={'space-between'} pt={'21px'} pr={'18px'} pl={'20px'}>
                    {width.includes('211px') ? <LogoWeb/> : <></>}
                    <Box pt={'3px'} onClick={() => {
                        handleClick()
                    }}>
                        <MenuIcon color={'white.pure'}/>
                    </Box>
                </Flex>
                <VStack
                    align={'left'}
                    m={'0px'}
                    spacing={0}
                >
                    <Flex h={'35px'} w={'100%'} bg={'blue.primary'}
                          mt={'0rem'}
                          _hover={{
                              bg: 'blue.sidebar',
                              cursor: 'pointer'
                          }}
                    >
                        <Center ml={'23px'}>
                            <VPS/>
                        </Center>
                        <Center ml={'16px'}>
                            <Text color='white.pure' fontSize={'14px'}>Заказать VPS</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}
                          _hover={{
                              bg: 'blue.sidebar',
                              cursor: 'pointer'
                          }}
                          onClick={() =>{
                              setAccountVisible(!accountVisible)
                          }}
                    >
                        <Center ml={'23px'}>
                            <Account/>
                        </Center>
                        <Center ml={'24px'}>
                            <Text color='white.pure' fontSize={'14px'}>АККАУНТ</Text>
                        </Center>
                    </Flex>
                    <AccountHiddenList visible={accountVisible}/>
                    <Flex h={'40px'} w={'100%'}
                          _hover={{
                              bg: 'blue.sidebar',
                              cursor: 'pointer'
                          }}
                    >
                        <Center ml={'23px'}>
                            <Servers/>
                        </Center>
                        <Center ml={'24px'}>
                            <Text color='white.pure' fontSize={'14px'}>СЕРВЕРЫ</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}
                          _hover={{
                              bg: 'blue.sidebar',
                              cursor: 'pointer'
                          }}
                    >
                        <Center ml={'23px'}>
                            <Monitoring/>
                        </Center>
                        <Center ml={'24px'}>
                            <Text color='white.pure' fontSize={'14px'}>МОНИТОРИНГ</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}
                          _hover={{
                              bg: 'blue.sidebar',
                              cursor: 'pointer'
                          }}
                          onClick={() =>{
                              setDomainVisible(!domainVisible)
                          }}
                    >
                        <Center ml={'23px'}>
                            <Domains/>
                        </Center>
                        <Center ml={'21px'}>
                            <Text color='white.pure' fontSize={'14px'}>ДОМЕНЫ</Text>
                        </Center>
                    </Flex>
                    <DomainsHiddenList visible={domainVisible}/>

                    <Flex h={'40px'} w={'100%'}
                          _hover={{
                              bg: 'blue.sidebar',
                              cursor: 'pointer'
                          }}
                    >
                        <Center ml={'23px'}>
                            <SSL/>
                        </Center>
                        <Center ml={'28px'}>
                            <Text color='white.pure' fontSize={'14px'}>SSL</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}
                          _hover={{
                              bg: 'blue.sidebar',
                              cursor: 'pointer'
                          }}
                    >
                        <Center ml={'21px'}>
                            <Shop/>
                        </Center>
                        <Center ml={'0px'}>
                            <Text color='white.pure' fontSize={'14px'}>МАГАЗИН</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}
                          _hover={{
                              bg: 'blue.sidebar',
                              cursor: 'pointer'
                          }}
                    >
                        <Center ml={'23px'}>
                            <Seo/>
                        </Center>
                        <Center ml={'23px'}>
                            <Text color='white.pure' fontSize={'14px'}>SEO И РЕКЛАМА</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}
                          _hover={{
                              bg: 'blue.sidebar',
                              cursor: 'pointer'
                          }}
                    >
                        <Center ml={'23px'}>
                            <Help/>
                        </Center>
                        <Center ml={'13px'}>
                            <Text color='white.pure' fontSize={'14px'}>ПОДДЕРЖКА</Text>
                        </Center>
                    </Flex>
                    <Flex h={'40px'} w={'100%'}
                          _hover={{
                              bg: 'blue.sidebar',
                              cursor: 'pointer'
                          }}
                    >
                        <Center ml={'23px'}>
                            <Idea/>
                        </Center>
                        <Center ml={'26px'}>
                            <Text color='white.pure' fontSize={'14px'}>ЕСТЬ ИДЕЯ</Text>
                        </Center>
                    </Flex>

                </VStack>
            </Box>
        </Box>
    )
}