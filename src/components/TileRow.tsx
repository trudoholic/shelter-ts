import {
  HStack,
} from "@chakra-ui/react"
import { COLS } from "../utils/constants"
import { Tile } from "./Tile"

interface TileRowProps {
  row: number
}

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