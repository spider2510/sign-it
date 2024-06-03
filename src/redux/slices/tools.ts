import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    strokeStyle: null,
    lineWidth: 5,
    lastX: 0,
    lastY: 0,
    isDrawing: false
}

const canvasToolsSlice = createSlice({
    name: "canvasTools",
    initialState: initialState,
    reducers: {
        setIsDrawing: (state, action) => {
            state.isDrawing = action.payload
        },
        setLineWidth: (state, action) => {
            state.lineWidth = action.payload
        },
        setStorkeStyle: (state, action) => {
            state.strokeStyle = action.payload
        },
        setLastX: (state, action) => {
            state.lastX = action.payload
        },
        setLastY: (state, action) => {
            state.lastY = action.payload
        }
    }
})

export const canvasToolsActions = canvasToolsSlice.actions

export default canvasToolsSlice.reducer