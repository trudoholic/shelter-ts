import "./App.css"
import {
  ChakraProvider,
  CSSReset,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react"
import { ROWS } from "./utils/constants"
import { TileRow } from "./components/TileRow"
import useGame from "./hooks/useGame"

function App() {

  const { tiles } = useGame()
  console.log(tiles)

  return (
    <>
      <ChakraProvider>
        <CSSReset />
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl">Shelter GAME</Heading>
          <VStack spacing={1}>
            {[...Array(ROWS)].map((_, i) => (
              <TileRow key={i} row={i} />
            ))}
          </VStack>
        </Container>
      </ChakraProvider>
    </>
  )
}

export default App
