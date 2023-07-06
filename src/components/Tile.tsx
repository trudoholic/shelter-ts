import {
  Divider,
  Flex,
  SimpleGrid,
  Spacer,
  Tag,
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
      <Divider />
      <Spacer />
      <SimpleGrid columns={6} spacing={1}>
        {[...Array(10)].map((_, i) => (
          <Tag size='lg' key={i} variant='solid' colorScheme='teal'>
            {i}
          </Tag>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export { Tile }