import { Box, Select, MenuItem } from "@mui/material"
import { MuiColorInput } from 'mui-color-input'

export const Tools = (props: { setStorkeStyle: React.Dispatch<any>, strokeStyle: any, lineWidth: number, setLineWidth: React.Dispatch<React.SetStateAction<number>> }) => {
    const { strokeStyle, setStorkeStyle, lineWidth, setLineWidth } = props
    const handleColorChange = (newValue: any) => {
        setStorkeStyle(newValue)
    }
    const handleWidthChange = (event: any) => {
        setLineWidth(event.target.value)
    }

    return <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} gap={2}>
        <MuiColorInput size="small" format="hex" value={strokeStyle || "#000000"} onChange={handleColorChange} />
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lineWidth}
            label="Line Width"
            onChange={handleWidthChange}
            size="small"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => <MenuItem key={value} value={value}>{`${value} px`}</MenuItem>)}
        </Select>
    </Box>
}