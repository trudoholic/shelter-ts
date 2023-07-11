import {useCallback, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import useUnits from "./useUnits"
import {getTiles} from "../custom/tiles"
import {
  selectAll,
  addMany,
  removeAll,
  updateOne,
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

  const getUnitsById  = useCallback((id) => {
    const tile = allTiles.find(it => it.id === id)
    return tile ? tile.units : []
  }, [allTiles])

  const handleUpdate = useCallback((id, units) => {
    const tile = allTiles.find(it => it.id === id)
    if (tile) {
      dispatch(updateOne({ id: tile.id, changes: {units: units} }))
    }
  }, [dispatch, allTiles])

  return {
    allTiles,
    getUnitsById,
    handleUpdate,
  }
}

export default useTiles
