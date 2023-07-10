import {
  Tag,
} from "@chakra-ui/react"
import { Draggable } from "@hello-pangea/dnd"

interface UnitProps {
  id: string
  name: string
  index: number
}

const Unit = ({ id, name, index }: UnitProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => {
        return (
          <div
            ref={provided.innerRef? provided.innerRef: void 0}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >

            <Tag size='lg' variant='solid' colorScheme='teal'>
              {name}
            </Tag>

          </div>
        )
      }}
    </Draggable>
  )
}

export { Unit }