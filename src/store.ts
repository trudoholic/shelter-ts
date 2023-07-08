import { configureStore } from "@reduxjs/toolkit"
import { tilesSlice } from "./features"

const store = configureStore({
  reducer: {
    tiles: tilesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store