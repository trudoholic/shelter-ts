import {
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react"

interface TileProps {
  row: number
  col: number
}

const Tile = ({ row, col }: TileProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      bg="gray.600"
      w="320px" h="240px" p={4}
    >
      <Text color="white" fontSize="lg" fontWeight="bold">
        Tile {row} : {col}
      </Text>
      <Spacer />
      <Text color="green.500">Online</Text>
    </Flex>
  )
}

export { Tile }