export interface ITile {
  id: string
  name: string
  row: number
  col: number
  flag: boolean
}

export const COLS = 4, ROWS = 5

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export const getTile = (row: number, col: number): ITile => {
  return {
    id: `T_${pad(row)}_${pad(col)}`,
    name: `T_${pad(row)}_${pad(col)}`,
    row,
    col,
    flag: false,
  }
}

export const getTiles = (): ITile[] => {
  const tiles: ITile[] = []
  let row = ROWS
  while (row --> 0) {
    let col = COLS
    while (col --> 0) {
      tiles.push(getTile(row, col))
    }
  }
  return tiles
}

export const toGrid = (tiles: ITile[]): ITile[][] => {
  const grid: ITile[][] = []
  for (let row = 0; row < ROWS; ++row) {
    const start = COLS * row
    grid.push(tiles.slice(start, start + COLS))
  }
  return grid
}
