import {Card} from "./components/styled/Card";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./styles/theme/Theme";

function App() {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Card/>
        </ChakraProvider>
    );
}

export default App;
