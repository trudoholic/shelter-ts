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

interface TileProps {
  tile: ITile
}

const Tile = ({tile}: TileProps) => {
  const {id, flag, units} = tile

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
                {units.map(({id, name}, i) => (
                  <Unit key={id} id={id} name={name} index={i} />
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