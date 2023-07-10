import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import useUnits from "./useUnits"
import {getTiles} from "../custom/tiles"
import {
  selectAll,
  addMany,
  removeAll,
  // updateOne,
} from "../features/tilesSlice"

const useTiles = () => {
  const {
    allUnits,
  } = useUnits()

  const dispatch = useDispatch()

  useEffect(() => {
    const tiles = getTiles()

    tiles.at(-1).units = allUnits.slice(0, 6)
    tiles.at(-2).units = allUnits.slice(6, 12)

    dispatch(addMany(tiles))

    return () => {
      dispatch(removeAll())
    }
  }, [dispatch, allUnits])

  const allTiles = useSelector(selectAll)

  return {
    allTiles,
    // handleUpdate,
  }
}

export default useTiles
