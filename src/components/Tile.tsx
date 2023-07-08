import {
  Divider,
  Flex,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react"
import { Droppable } from "@hello-pangea/dnd"
import { Unit } from "./Unit"
import { getId, getTiles, getUnits } from "../utils"

interface TileProps {
  row: number
  col: number
}

const tiles = getTiles()
const units = getUnits()

const Tile = ({ row, col }: TileProps) => {
  const id = getId(row, col)
  const b = tiles[id]?.b
  const unitsList = units.filter(it => it.parentId === id)

  return (
    <Flex
      direction="column"
      align="center"
      bg={b ? "blue.600" : "gray.600"}
      w="320px" h="240px" p={4}
    >
      <Text color="white" fontSize="lg" fontWeight="bold">
        Tile {id}
      </Text>
      <Divider />
      <Spacer />

      <Droppable droppableId={id} isDropDisabled={!b}>
        {provided => {
          return (
            <div {...provided.droppableProps} ref={provided.innerRef? provided.innerRef: void 0}>

              <SimpleGrid columns={6} spacing={1}>
                {unitsList.map(({id}, i) => (
                  <Unit key={id} id={id} index={i} />
                ))}
              </SimpleGrid>

              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>

    </Flex>
  )
}

export { Tile }