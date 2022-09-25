import React from "react"
import {Box, Center, Flex, Text, VStack, Button, Heading} from "@chakra-ui/react"
import {HDD} from "./svg/HDD";
import {DropDownButton} from "../../styles/DropDownButton";
import {Turbo} from "./svg/Turbo";
import {SSD} from "./svg/SSD";



export const Card = () => {


    return (
            <Box as={'article'} h={'547px'}
                 width={['232px', '232px', '343px', '232px']}
                 bg={'blue.ssd'}
                 borderRadius={'4px'}
                 p={'20px'}
                 fontSize={'12px'}
            >
                <Flex>
                    <SSD/>
                    <Center>
                        <Text as={'p'} ml={'16px'}>KVM-10</Text>
                    </Center>
                </Flex>
                <Text mt={'14px'} fontWeight={'700'} fontSize={'20px'}>
                    1 099 ₽/мес.
                </Text>
                <VStack
                    mt={'14px'}
                    mb={'10px'}
                    spacing={'4px'}
                    align={'left'}
                >
                    <Flex>
                        <Center>
                            <Text color='gray.100'>CPU</Text>
                        </Center>
                        <Text fontSize={'16px'} ml={'11px'} mb={'4px'}> 2 × 2,8 ГГц </Text>
                    </Flex>
                    <Flex>
                        <Center>
                            <Text color='gray.100'>RAM</Text>
                        </Center>
                        <Text fontSize={'16px'} ml={'11px'} mb={'4px'}> 1024 МБ </Text>
                    </Flex>
                    <Flex>
                        <Center>
                            <Text color='gray.100'>DISK</Text>
                        </Center>
                        <Text fontSize={'16px'} ml={'11px'} mb={'4px'}> 10 ГБ NVMe</Text>
                    </Flex>
                </VStack>
                <VStack
                    mb={'20px'}
                    spacing={'20px'}
                    align={'left'}
                >
                    <Box>
                        <Text mb={'8px'} color='gray.100'>Дистрибутив</Text>
                        <DropDownButton/>
                    </Box>
                    <Box>
                        <Text mb={'8px'} color='gray.100'>Программное обеспечение</Text>
                        <DropDownButton/>
                    </Box>
                    <Box>
                        <Text mb={'8px'} color='gray.100'>Дата-центр</Text>
                        <Flex w={'192px'} color={'blue.primary'} bg={'white.pure'}
                              h={'20px'} justify={'space-between'}
                              borderRadius={'10px'} border={'1px solid #3DBDF6'}
                        >
                            <Text w={'123px'} borderRadius={'10px'} border={'1px solid #3DBDF6'}
                                  align={'center'} color={'white.pure'} bg={'blue.primary'}
                            >
                                Санкт-Петербург
                            </Text>
                            <Text mr={'13px'}>Москва</Text>
                        </Flex>
                    </Box>
                    <Flex justify={'center'}>
                        <Button borderRadius={'2px'} boxShadow={'0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)'} w={['167px', '167px', '303px', '167px']} bg={'blue.primary'}>
                            <Heading align={'center'} fontWeight={'800'} fontSize={'16px'} color={'white.pure'}>ЗАКАЗАТЬ</Heading>
                        </Button>
                    </Flex>
                </VStack>
            </Box>
    )
}