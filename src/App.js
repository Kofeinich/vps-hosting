import {Card} from "./components/styled/Card";
import {ChakraProvider, Box} from "@chakra-ui/react";
import {theme} from "./styles/theme/Theme";
import {SideBar} from "./components/styled/SideBar";
import {Header} from "./components/styled/Header";
import {Main} from "./components/styled/Main";

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
