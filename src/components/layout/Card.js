import React, {useState} from "react"
import {Box, Center, Flex, Text, VStack, Button, Heading} from "@chakra-ui/react"
import {HDD} from "../styled/svg/HDD";
import {DropDownButton} from "../styled/DropDownButton";
import {Turbo} from "../styled/svg/Turbo";
import {SSD} from "../styled/svg/SSD";



export const Card = (info) => {
    let logo = <></>
    let bg = ''

    if (info.info['category'] === 'nvme'){
        logo = <SSD/>
        bg = 'blue.ssd'
    } else if (info.info['category'] === 'hdd'){
        logo = <HDD/>
        bg = 'blue.hdd'
    } else if (info.info['category'] === 'turbo'){
        logo = <Turbo/>
        bg = 'blue.turbo'
    }



    return (
            <Box as={'article'} h={'547px'}
                 width={['232px', '232px', '343px', '232px']}
                 bg={bg}
                 borderRadius={'4px'}
                 p={'20px'}
                 fontSize={'12px'}
            >
                <Flex>
                    {logo}
                    <Center>
                        <Text as={'p'} ml={'16px'}>{info.info['name']}</Text>
                    </Center>
                </Flex>
                <Text mt={'14px'} fontWeight={'700'} fontSize={'20px'}>
                    {`${info.info['price_per_month']} ₽/мес.`}
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
                        <Text fontSize={'16px'} ml={'11px'} mb={'4px'}> {`${info.info['cpu_cores']} × 2,8 ГГц`}</Text>
                    </Flex>
                    <Flex>
                        <Center>
                            <Text color='gray.100'>RAM</Text>
                        </Center>
                        <Text fontSize={'16px'} ml={'11px'} mb={'4px'}> {`${info.info['ram']} МБ`}</Text>
                    </Flex>
                    <Flex>
                        <Center>
                            <Text color='gray.100'>DISK</Text>
                        </Center>
                        <Text fontSize={'16px'} ml={'11px'} mb={'4px'}> {`${info.info['volume_disk']} ${info.info['disk_type']}`}</Text>
                    </Flex>
                </VStack>
                <VStack
                    mb={'20px'}
                    spacing={'20px'}
                    align={'left'}
                >
                    <Box>
                        <Text mb={'8px'} color='gray.100'>Дистрибутив</Text>
                        <DropDownButton width={'100%'}/>
                    </Box>
                    <Box>
                        <Text mb={'8px'} color='gray.100'>Программное обеспечение</Text>
                        <DropDownButton width={'100%'}/>
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