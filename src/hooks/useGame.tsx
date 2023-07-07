import { useCallback, useEffect, useState } from "react"
import { ITiles, getId, getTiles } from "../utils"

const useGame = () => {
  const [tiles, setTiles] = useState<ITiles>({})

  const initialize = useCallback(() => {
    const tiles = getTiles()
    tiles[getId(2, 2)] = {b: true}
    setTiles(tiles)
  }, [])

  useEffect(() => {
    initialize()
  }, [initialize])

  return {
    tiles,
    // setTiles,
  }

}

export default useGame
