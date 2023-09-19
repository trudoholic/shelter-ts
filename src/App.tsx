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
import useTiles from "./hooks/useTiles"

function App() {

  const {
    allTiles,
    getUnitsById,
    handleUpdate,
  } = useTiles()
  const grid = toGrid(allTiles)
  // console.log('###', grid)

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return
    }

    console.log('### ==SRC== ###', source)
    console.log('### DST ###', destination)
    console.log('### SRC ###', source)
    console.log('### ==DST== ###', destination)

    const srcId =  source.droppableId, dstId = destination.droppableId

    const srcList = [...getUnitsById(srcId)]
    const dstList = srcId === dstId ? srcList : [...getUnitsById(dstId)]

    const [movedElement] = srcList.splice(source.index, 1)
    dstList.splice(destination.index, 0, movedElement)

    handleUpdate(srcId, srcList)
    if (srcId !== dstId) {
      handleUpdate(dstId, dstList)
    }
  }

  return (
    <>
      <ChakraProvider>
        <CSSReset />
        <Container maxW="container.lg" centerContent userSelect="none">
          <Heading as="h1" size="xl" pb={4}>
            Shelter GAME on Main
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
