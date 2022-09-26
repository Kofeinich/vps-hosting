import {useDispatch} from "react-redux";

export const MeItem = ({text}) => {
    const dispatch = useDispatch();


    return (
        <MeItem
            w={'100%'} bg={'white.pure'}
            color={'black'} h={'31px'}
            fontSize={'16px'} fontWeight={'400'}
            pr={'16px'} pt={'8px'} pl={'16px'}
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
            {text}
        </MeItem>
    )
}