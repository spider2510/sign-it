import { Box, Select, MenuItem } from "@mui/material"
import { MuiColorInput } from 'mui-color-input'
import { useDispatch, useSelector } from "react-redux"
import { canvasToolsActions } from "../redux/slices/tools"
import { RootState } from "../redux/store"

export const Tools = () => {
    const dispatch = useDispatch()
    const canvasTools = useSelector((state: RootState) => state.canvasTools)
    const handleColorChange = (newValue: any) => {
        dispatch(canvasToolsActions.setStorkeStyle(newValue))
    }
    const handleWidthChange = (event: any) => {
        dispatch(canvasToolsActions.setLineWidth(event.target.value))
    }

    return <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} gap={2}>
        <MuiColorInput size="small" format="hex" value={canvasTools.strokeStyle || "#000000"} onChange={handleColorChange} />
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={canvasTools.lineWidth}
            label="Line Width"
            onChange={handleWidthChange}
            size="small"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => <MenuItem key={value} value={value}>{`${value} px`}</MenuItem>)}
        </Select>
    </Box>
}