import {Card} from "../components/layout/Card";
import {ChakraProvider, Box} from "@chakra-ui/react";
import {theme} from "../assets/theme/Theme";
import {SideBar} from "../components/layout/SideBar";
import {Header} from "../components/layout/Header";
import {Main} from "../components/layout/Main";

function App() {
    return (
            <ChakraProvider resetCSS theme={theme}>
                <Box position={'relative'} h={'100%'}>
                    <SideBar/>
                    <Main/>
                </Box>
            </ChakraProvider>
    );
}

export default App;
