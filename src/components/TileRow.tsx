import {
  HStack,
} from "@chakra-ui/react"
import { Tile } from "./Tile"

interface TileRowProps {
  row: number
}

const COLS = 4

const TileRow = ({ row }: TileRowProps) => {
  return (
    <HStack spacing={1}>
      {[...Array(COLS)].map((_, i) => (
        <Tile key={i} row={row} col={i} />
      ))}
    </HStack>
  )
}

export { TileRow }