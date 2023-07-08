import {useCallback} from "react"//React,//, useState//, useEffect
import {useSelector, useDispatch} from "react-redux"
import {getTiles} from '../custom/tiles';
import {
  selectAll,
  addMany,
  // addOne,
  // removeOne,
  // updateOne,
} from "../features/tilesSlice"

const useTiles = () => {

  const allTiles = useSelector(selectAll)
  // console.log(cards)

  const dispatch = useDispatch()

  const handleAddMany = useCallback(() => {
    const tiles = getTiles()
    if (tiles.length) {
      dispatch(addMany(tiles))
    }
  }, [dispatch])

  // useEffect(() => {
  //   console.log('> allTiles:', allTiles.length)
  //   const tiles = getTiles()
  //   if (tiles.length) {
  //     dispatch(addMany(tiles))
  //   }
  //   console.log('>> allTiles:', allTiles.length)
  // }, [dispatch, allTiles.length])

  return {
    allTiles,
    handleAddMany,
    // handleAddMany,
    // handleUpdate,
    // handleRemove,
  }
}

export default useTiles