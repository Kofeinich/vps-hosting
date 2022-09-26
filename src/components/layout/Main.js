import React, {useState} from "react"
import {Box, Center, Flex, SimpleGrid, Text, VStack, Button, Heading} from "@chakra-ui/react"
import {Card} from "./Card";
import {Header} from "./Header";
import {useDispatch} from "react-redux";
import {useEffect} from 'react'
import {getDataFromApi} from "../services/redux/actions/actions";
import {store} from "../services/redux/store/store";
import {DropDownButton} from "../styled/DropDownButton";
import {Footer} from "./Footer";


export const Main = () => {
    const [state, setState] = useState({'': 0})
    const dispatch = useDispatch()
    useEffect(() => {
        const f = () => {
            dispatch(getDataFromApi()).then(() => {
                store.getState().done ? setState(store.getState) : console.log(':(')
            })
        }
        f()
        setInterval(f, 600000)
    }, [])


    return (
        <Box as={'main'} position={'absolute'}
             right={0} top={0}
             pr={'20px'} pl={'20px'}
             w={'calc(100% - 211px)'}
        >
            <Header/>
            <Box as={'section'}
                 w={'100%'} bg={'white.pure'} pt={'17px'}
                 pr={'20px'} pl={'20px'} pb={'30px'}
                 boxShadow={'1px 1px 4px #E3E9EC'}
            >
                <Box>
                    <Box w={'100%'} mb={'20px'}>
                        <Text fontSize={'12px'} fontWeight={'300'} mb={'11px'}>АККАУНТ</Text>
                        <Heading as={'h1'} fontSize={'20px'}
                                 pb={'15px'} borderBottom={'2px solid #F7FAFB'}
                        >
                            ЗАКАЗАТЬ VPS
                        </Heading>
                        <Text fontSize={'12px'} mt={'16px'} mb={'12px'} fontWeight={'400'} color={'gray.header'}>Категория</Text>
                        <DropDownButton width={'232px'}/>
                    </Box>
                </Box>
                <Flex as={'section'} justify={'center'}>
                    <SimpleGrid
                        as={'section'} p={0}
                        columns={[1, 1, 3, 4]}
                        spacingX='20px' spacingY='20px'
                    >
                        {state.done && state.data['result']['vpsPlans'].map(el => <Card info={el}
                                                                                        key={el['id']}/>)}
                    </SimpleGrid>
                </Flex>
                <Footer/>
            </Box>
        </Box>
    )
}