import React from "react"
import {Box, ChakraProviderProps, Flex, Text} from "@chakra-ui/react"
import {HDD} from "./svg/HDD";


export const Card = () => {


    return (
        <Box as={'article'} h={'547px'}
             width={['243px', '243px', '343px', '243px']}
             bg={'#E0F6FC'}
             borderRadius={'4px'}
             p={'20px'}
        >
            <Flex>
                <HDD/>
                <Text as={'p'} fontSize={'12px'} >KVM-10</Text>
            </Flex>

        </Box>
    )
}