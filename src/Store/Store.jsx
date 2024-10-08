import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../Features/Slice"

export const store = configureStore({
    reducer: todoReducer
})