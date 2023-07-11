import { DraggableLocation } from "@hello-pangea/dnd"

export interface ITile {
  b: boolean
}

export interface ITiles {
  [key: string]: ITile
}

// method to handle the cards movement
export const move = (state: ITiles, source: DraggableLocation, destination: DraggableLocation) => {
  console.log('### SRC ###', source)
  console.log('### DST ###', destination)

  const srcListClone = [...state[source.droppableId]]
  const destListClone =
    source.droppableId === destination.droppableId
      ? srcListClone
      : [...state[destination.droppableId]]

  const [movedElement] = srcListClone.splice(source.index, 1)
  destListClone.splice(destination.index, 0, movedElement)

  return {
    [source.droppableId]: srcListClone,
    ...(source.droppableId === destination.droppableId
      ? {}
      : {
        [destination.droppableId]: destListClone,
      }),
  }
}
