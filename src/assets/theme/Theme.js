import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        black: '#000000',
        gray: {
            100: '#62686C',
            500: '#939DA2',
            header: '#7A8185',
            footer: '#A6A6A6',
        },
        white: {
            second: '#F5F5F5',
            pure: '#FFFFFF',
            border: '#F7FAFB',
        },
        blue: {
            ssd: '#E0F6FC',
            hdd: '#C4EBF8',
            turbo: '#ECFDF7',
            primary: '#3DBDF6',
            sidebar: '#0A3145',
            second: '#062436',
        },
        green: '#32C190',
    },
    fonts: {
        heading: `'Heading Proxima Nova', sans-serif`,
        body: `'Regular Proxima Nova', sans-serif`,
    },

    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },
});
