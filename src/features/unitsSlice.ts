import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import { RootState } from "../store"

import {IUnit} from "../custom/units"

const adapter = createEntityAdapter<IUnit>({
  selectId: it => it.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

export const { selectAll } = adapter.getSelectors((state: RootState) => state.units)

export const slice = createSlice({
  name: 'units',
  initialState: adapter.getInitialState(),
  reducers: {
    addMany: adapter.addMany,
    addOne: adapter.addOne,
    removeAll: adapter.removeAll,
    removeOne: adapter.removeOne,
    updateOne: adapter.updateOne,
  },
})

export const {
  addMany,
  // addOne,
  removeAll,
  // removeOne,
  // updateOne,
} = slice.actions

export default slice.reducer