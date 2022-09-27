import {MenuItem, Text} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {chooseItem} from "../services/redux/actions/actions";


export const MeItem = ({text, id}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(chooseItem(text, id))
    }

    return (
        <MenuItem
            w={'100%'} bg={'white.pure'}
            color={'black'} h={'44px'}
            fontSize={'16px'} fontWeight={'300px'}
            align={'left'}
            _hover={{
                bg: 'blue.primary',
                cursor: 'pointer',
                color: `white.pure`,
            }}
            _active={{
                border: '2px solid #339AC8'
            }}
            onClick={() => {
                handleClick()
            }}
        >
            <Text p={'0'}>{text}</Text>
        </MenuItem>
    )
}