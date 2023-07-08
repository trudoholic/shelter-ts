import { configureStore } from "@reduxjs/toolkit"
import { tilesSlice } from "./features"

const store = configureStore({
  reducer: {
    cards: tilesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store