import {
  Divider,
  Flex,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react"
import { Droppable } from "@hello-pangea/dnd"
import {ITile} from "../custom/tiles"
import { Unit } from "./Unit"
import { getUnits } from "../utils"

interface TileProps {
  tile: ITile
}

const units = getUnits()

const Tile = ({tile}: TileProps) => {
  const {id, flag} = tile
  const unitsList = units.filter(it => it.parentId === id)

  return (
    <Flex
      direction="column"
      align="center"
      bg={flag ? "blue.600" : "gray.600"}
      w="320px" h="240px" p={4}
    >
      <Text color="white" fontSize="lg" fontWeight="bold">
        {id}
      </Text>
      <Divider />
      <Spacer />

      <Droppable droppableId={id} isDropDisabled={!flag}>
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