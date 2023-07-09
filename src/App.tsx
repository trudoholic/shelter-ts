import "./App.css"
import {
  ChakraProvider,
  CSSReset,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react"
import { DragDropContext, DropResult } from "@hello-pangea/dnd"
import { ROWS } from "./utils/constants"
import { TileRow } from "./components/TileRow"
import { move } from "./utils"
import useTiles from "./hooks/useTiles"

function App() {

  const {
    allTiles,
  } = useTiles()
  console.log('###', allTiles)

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return
    }

    this.setState(state => {
      return move(state, source, destination)
    })
  }

  return (
    <>
      <ChakraProvider>
        <CSSReset />
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl" pb={4}>
            Shelter GAME
          </Heading>

          <DragDropContext onDragEnd={onDragEnd}>

            <VStack spacing={1}>
              {[...Array(ROWS)].map((_, i) => (
                <TileRow key={i} row={i} />
              ))}
            </VStack>

          </DragDropContext>

        </Container>
      </ChakraProvider>
    </>
  )
}

export default App
