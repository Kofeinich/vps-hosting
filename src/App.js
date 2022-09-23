import {Card} from "./components/styled/Card";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        black: '#000000',
        gray: {
            100: '#62686C',
            500: '#939DA2',
            header: '#7A8185',
            footer: '#A6A6A6',
        },
        white: {
            footer: '#F5F5F5',
            pure: '#FFFFFF',
        },
        blue: {
            ssd: '#E0F6FC',
            hdd: '#C4EBF8',
            turbo: '#ECFDF7',
            primary: '#3DBDF6',
            second: '#062436',
        },
        green: '#32C190',
    },
    fonts: {
        heading: `'Heading Proxima Nova'`,
        body: `'Regular Proxima Nova'`,
    },

    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },
});


function App() {
    return (
        <ChakraProvider theme={theme}>
            <Card/>
        </ChakraProvider>
    );
}

export default App;
