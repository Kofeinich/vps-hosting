import {Box, Center, Flex, SimpleGrid, Text, VStack, Button, Heading, chakra} from "@chakra-ui/react"
import AppleGoogle from "../styled/svg/AppleGoogle";

export const Footer = () => {
    return (

        <Flex as={'footer'} zIndex={3000} position={'absolute'}
              bottom={'-100px'} left={'0'} right={'0'} bg={'white.second'} w={'100vw'} h={'100px'}
              ml={'-211px'} justify={'space-between'} pr={'20px'} pl={'20px'} pt={'20px'}
              fontSize={'12px'} fontWeight={'400'}
        >
            <Box>
                <chakra.span>© 2001–2022 ООО</chakra.span>
                <chakra.span color={'blue.primary'}> «СпейсВэб»</chakra.span>
                <br/>
                <chakra.span> Все права защищены.</chakra.span>
                <br/>
                <chakra.span> Лицензия</chakra.span>
                <chakra.span color={'blue.primary'}> №163230</chakra.span>
            </Box>
            <AppleGoogle/>
            <Box>
                <chakra.span color={'blue.primary'}>+7 (812) 334-12-22</chakra.span>
                <chakra.span> (в Санкт-Петербурге)</chakra.span>
                <br/>
                <chakra.span color={'blue.primary'}>+7 (495) 663-16-12</chakra.span>
                <chakra.span> (в Москве)</chakra.span>
                <br/>
                <chakra.span color={'blue.primary'}>+7 (800) 100-16-15</chakra.span>
                <chakra.span> (бесплатно по России)</chakra.span>
            </Box>

        </Flex>
    )
}