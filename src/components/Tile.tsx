import {
  Box,
} from "@chakra-ui/react"

interface TileProps {
  row: number
  col: number
}

const Tile = ({ row, col }: TileProps) => {
  return (
    <Box bg='gray.600' w='100%' p={4} color='white'>
      Box {row}:{col}
    </Box>
  )
}

export { Tile }