import React from "react"
import {Box, Center, Flex, SimpleGrid, Text, VStack, Button, Heading} from "@chakra-ui/react"
import {Card} from "./Card";
import {Header} from "./Header";
import {useEffect, useState} from 'react'
import {getData} from "../service-functions/getData";

export const Main = () => {
    const [data, setData] = useState({"":0})
    useEffect(() => {
        const f = () => {
            getData().then(data => {
                setData(data)
            })
        }
        f()
        setInterval(f, 600000)
    }, [])

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