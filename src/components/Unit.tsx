import {
  Tag,
} from "@chakra-ui/react"
import { Draggable } from "@hello-pangea/dnd"

interface UnitProps {
  id: string
  index: number
}

const Unit = ({ id, index }: UnitProps) => {
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
              {id}
            </Tag>

          </div>
        )
      }}
    </Draggable>
  )
}

export { Unit }