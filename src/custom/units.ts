export interface IUnit {
  id: string
  name: string
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export const getUnit = (n: number): IUnit => {
  return {
    id: `U_${pad(n)}`,
    name: `#${pad(n)}`,
  }
}

export const getUnits = (): IUnit[] => {
  const units: IUnit[] = []
  let n = 20
  while (n --> 0) {
    units.push(getUnit(n))
  }
  return units
}
