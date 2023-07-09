import { COLS, ROWS } from "./constants"
import { DraggableLocation } from "@hello-pangea/dnd"

export interface ITile {
  b: boolean
}

export interface ITiles {
  [key: string]: ITile
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export const getId = (row: number, col: number) => {
  // return `t_${row}_${col}`
  return `T_${pad(row)}_${pad(col)}`
}

export const getTiles = (): ITiles => {
  const tiles: ITiles = {}
  let row = ROWS
  while (row --> 0) {
    let col = COLS
    while (col --> 0) {
      tiles[getId(row, col)] = {b: (row < 2 && col < 2)}
    }
  }
  return tiles
}

// method to handle the cards movement
export const move = (state: ITiles, source: DraggableLocation, destination: DraggableLocation) => {
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

// - - -

export interface IUnit {
  id: string
  parentId: string
}

export const getUnits = (): IUnit[] => {
  const units: IUnit[] = []

  let n = 20
  while (n --> 0) {
    const id = "#" + n.toString().padStart(2, "0")
    units.push(
      {id, parentId: getId(0, Math.floor(n / 10))}
    )
  }
  return units
}
