// import { useState } from 'react'
import "./App.css"
import {
  ChakraProvider,
  CSSReset,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react"
import { TileRow } from "./components/TileRow"

function App() {
  // const [count, setCount] = useState(0)
  const ROWS = 20

  return (
    <>
      <ChakraProvider>
        <CSSReset />
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl">Shelter GAME</Heading>
          <VStack spacing={1}>
            {[...Array(ROWS)].map((it, i) => (
              <TileRow key={i} row={i} />
            ))}
          </VStack>
        </Container>
      </ChakraProvider>
    </>
  )
}

export default App
