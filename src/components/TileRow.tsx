import {
  HStack,
} from "@chakra-ui/react"
import { Tile } from "./Tile"

interface TileRowProps {
  row: number
}

const COLS = 10

const TileRow = ({ row }: TileRowProps) => {
  return (
    <HStack spacing={1}>
      {[...Array(COLS)].map((it, i) => (
        <Tile key={i} row={row} col={i} />
      ))}
    </HStack>
  )
}

export { TileRow }