import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getUnits} from '../custom/units'
import {
  selectAll,
  addMany,
  removeAll,
  // updateOne,
} from "../features/unitsSlice"

const useUnits = () => {
  const dispatch = useDispatch()

  const allUnits = useSelector(selectAll)

  useEffect(() => {
    const units = getUnits()
    dispatch(addMany(units))

    return () => {
      dispatch(removeAll())
    }
  }, [dispatch])

  return {
    allUnits,
    // handleUpdate,
  }
}

export default useUnits
