import {MenuItem, Text} from "@chakra-ui/react";

export const MeItem = ({text}) => {
    // const dispatch = useDispatch();

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
        >
            <Text p={'0'}>{text}</Text>
        </MenuItem>
    )
}