import { configureStore } from "@reduxjs/toolkit"
import { tilesSlice } from "./features"
import { unitsSlice } from "./features"

const store = configureStore({
  reducer: {
    tiles: tilesSlice,
    units: unitsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store