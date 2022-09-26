import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button, Text,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React, {useState, useEffect} from "react";
import {MeItem} from "./MeItem";
import {store} from "../services/redux/store/store";

export const DropDownButton = ({width, variant, ...props}) => {

    const [chosenText, setChosenText] = useState('')

    return (
        <Menu w={width}>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon color="gray.500" />}
                h={['36px', '39px', '39px', '39px']}
                w={width}
                borderRadius={'4px'}
                border={'2px solid #939DA2'}
                bg={'white.pure'}
                fontSize={'16px'} fontWeight={'300px'}
            >
                <Text align={'left'}>{chosenText}</Text>
            </MenuButton>
            <MenuList borderRadius={'4px'} bg={'white.pure'} w={width} boxShadow={'0px 2px 10px #AFBABF'}>

            </MenuList>
        </Menu>
    )
}