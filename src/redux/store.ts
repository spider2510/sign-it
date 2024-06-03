import { configureStore } from "@reduxjs/toolkit";
import canvasToolsReducer from "./slices/tools";


const store = configureStore({
    reducer: {
        canvasTools: canvasToolsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store