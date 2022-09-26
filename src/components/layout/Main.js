import React from "react"
import {Box, Center, Flex, SimpleGrid, Text, VStack, Button, Heading} from "@chakra-ui/react"
import {Card} from "./Card";
import {Header} from "./Header";
import {useDispatch} from "react-redux";
import {useEffect} from 'react'
import {getDataFromApi} from "../services/redux/actions/actions";
import {store} from "../services/store/store";


export const Main = () => {
    const dispatch =  useDispatch()
    useEffect(() => {
        const f = () => {
            dispatch(getDataFromApi())
        }
        f()
        setInterval(f, 600000)
    }, [])

    console.log(store.getState())



    return (
        <Box as={'main'} position={'absolute'}
             right={0} top={0}
             pr={'20px'} pl={'20px'} pb={'30px'}
             w={'calc(100% - 211px)'}
        >
            <Header/>
            <Flex as={'section'}
                  w={'100%'} bg={'white.pure'} pt={'17px'}
                  pr={'20px'} pl={'20px'} pb={'30px'}
                  justify={'center'}
            >
                <SimpleGrid
                    as={'section'}  p={0}
                    columns={[1, 1, 3, 4]}
                    spacingX='20px' spacingY='20px'
                >
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </SimpleGrid>
            </Flex>
        </Box>
    )
}