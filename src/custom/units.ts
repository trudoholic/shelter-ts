export interface IUnit {
  id: string
  name: string
}

export const getUnits = (): IUnit[] => {
  const units: IUnit[] = []
  // let row = ROWS
  // while (row --> 0) {
  //   let col = COLS
  //   while (col --> 0) {
  //     units.push(getUnit(row, col))
  //   }
  // }
  return units
}
