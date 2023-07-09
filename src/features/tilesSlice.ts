import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import { RootState } from "../store"

import {ITile} from "../custom/tiles"

const adapter = createEntityAdapter<ITile>({
  selectId: it => it.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

export const { selectAll } = adapter.getSelectors((state: RootState) => state.tiles)

export const slice = createSlice({
  name: 'tiles',
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