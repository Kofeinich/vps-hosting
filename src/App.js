import {Card} from "./components/styled/Card";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./styles/theme/Theme";
import {SideBar} from "./components/styled/SideBar";
import {Header} from "./components/styled/Header";

function App() {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Header></Header>
            <SideBar/>
            <Card/>
        </ChakraProvider>
    );
}

export default App;
