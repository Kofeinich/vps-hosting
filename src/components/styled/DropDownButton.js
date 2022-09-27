import {
    Menu,
    MenuButton,
    MenuList,
    Button, Text,
} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import React, {useEffect, useState} from "react";
import {MeItem} from "./MeItem";
import {useDispatch, useSelector} from "react-redux";

export const DropDownButton = ({width, selectData, variant}) => {

    const [text, setText] = useState(variant)

    let data = useSelector(selectData);

    let content = useSelector(state => {
        const {itemReducer} = state;
        console.log(itemReducer)
        if (typeof itemReducer !== "undefined"){
            return itemReducer.content;
        } else { return ''}
    })


    return (
        <Menu w={width}>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon color="gray.500"/>}
                h={['36px', '39px', '39px', '39px']}
                w={width}
                borderRadius={'4px'}
                border={'2px solid #939DA2'}
                bg={'white.pure'}
                fontSize={'16px'} fontWeight={'300px'}
            >
                <Text align={'left'}>{text}</Text>
            </MenuButton>
            <MenuList p={'0px'} borderRadius={'4px'} bg={'white.pure'} w={width} boxShadow={'0px 2px 10px #AFBABF'}>
                {data.map(el => <MeItem variant={variant} text={el.text} id={el['id']} key={el['id']}/>)}
            </MenuList>
        </Menu>
    )
}