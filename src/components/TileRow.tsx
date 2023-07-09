import {
  HStack,
} from "@chakra-ui/react"
import {ITile} from "../custom/tiles"
import {Tile} from "./Tile"

interface TileRowProps {
  row: ITile[]
}

const TileRow = ({ row }: TileRowProps) => {
  return (
    <HStack spacing={1}>
      {row.map((tile) => (
        <Tile key={tile.id} tile={tile} />
      ))}
    </HStack>
  )
}

export { TileRow }