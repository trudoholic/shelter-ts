import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getTiles} from '../custom/tiles';
import {
  selectAll,
  addMany,
  removeAll,
  // updateOne,
} from "../features/tilesSlice"

const useTiles = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const tiles = getTiles()
    dispatch(addMany(tiles))

    return () => {
      dispatch(removeAll())
    }
  }, [dispatch])

  const allTiles = useSelector(selectAll)

  return {
    allTiles,
    // handleUpdate,
  }
}

export default useTiles