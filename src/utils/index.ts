import { COLS, ROWS } from './constants'

export interface ITile {
  b: boolean
}

export interface ITiles {
  [key: string]: ITile
}

export const getId = (row: number, col: number) => {
  return `t_${row}_${col}`
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