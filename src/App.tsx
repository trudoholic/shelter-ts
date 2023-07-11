import "./App.css"
import {
  ChakraProvider,
  CSSReset,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react"
import {DragDropContext, DropResult} from "@hello-pangea/dnd"
import {TileRow} from "./components/TileRow"
import {toGrid} from "./custom/tiles"
import {move} from "./custom/utils"
import useTiles from "./hooks/useTiles"

function App() {

  const {
    allTiles,
  } = useTiles()
  const grid = toGrid(allTiles)
  // console.log('###', grid)

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
              {grid.map((row, i) => (
                <TileRow key={i} row={row} />
              ))}
            </VStack>

          </DragDropContext>

        </Container>
      </ChakraProvider>
    </>
  )
}

export default App
