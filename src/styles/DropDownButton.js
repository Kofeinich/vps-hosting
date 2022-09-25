import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button, Text,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React from "react";

export const DropDownButton = () => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon color="gray.500" />}
                h={['36px', '39px', '39px', '39px']}
                w={'100%'}
                borderRadius={'4px'}
                border={'2px solid #939DA2'}
                bg={'white.pure'}
            >
                <Text fontSize={'16px'} fontWeight={'400px'} align={'left'}> Ubuntu</Text>
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    )
}