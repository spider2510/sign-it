import { Box, Button, Typography } from "@mui/material"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { canvasToolsActions } from "../redux/slices/tools"
import { RootState } from "../redux/store"

export const Canvas = () => {
    const [isClear, setIsClear] = useState(true)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const dispatch = useDispatch()
    const canvasTools: any = useSelector((state: RootState) => state.canvasTools)

    const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        dispatch(canvasToolsActions.setIsDrawing(true))
        dispatch(canvasToolsActions.setLastX(event.nativeEvent.offsetX))
        dispatch(canvasToolsActions.setLastY(event.nativeEvent.offsetY))
    }

    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!canvasTools.isDrawing || !canvasRef) return
        const canvas = canvasRef.current
        if (!canvas) return
        const context = canvas.getContext('2d')
        if (!context) return
        context.strokeStyle = canvasTools.strokeStyle || "#000000"
        context.lineJoin = "round"
        context.lineCap = "round"
        context.lineWidth = canvasTools.lineWidth || 3

        context.beginPath()
        context.moveTo(canvasTools.lastX, canvasTools.lastY)
        context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY)

        context.stroke()
        dispatch(canvasToolsActions.setLastX(event.nativeEvent.offsetX))
        dispatch(canvasToolsActions.setLastY(event.nativeEvent.offsetY))
        setIsClear(false)
    }

    const handleMouseUp = (_event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        dispatch(canvasToolsActions.setIsDrawing(false))
    }


    const handleMouseOut = (_event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        dispatch(canvasToolsActions.setIsDrawing(false))
    }

    const handleClear = () => {
        const canvas = canvasRef.current
        if (!canvas) return
        const context = canvas.getContext('2d')
        if (!context) return
        context.clearRect(0, 0, canvas.width, canvas.height)
        setIsClear(true)
    }

    const handleDownload = () => {
        const canvas = canvasRef.current
        if (!canvas) return
        const url = canvas.toDataURL('image/png')
        const a = document.createElement('a')
        a.href = url
        a.download = 'signature.png'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    return <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
        <canvas ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
            height={300}
            width={600}
            style={{ border: "3px  solid #89e6da", borderRadius: 5, boxShadow: "0 4px 8px 0 #89e6da, 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        </canvas>
        <Box display={"flex"} flexDirection={"row"} gap={2}>
            <Button sx={{ backgroundColor: "#5AB2FF" }} onClick={handleDownload} disabled={!canvasTools.lastX || !canvasTools.lastY || isClear} variant="contained" >
                <Typography variant="subtitle2">Download</Typography>
            </Button>
            <Button sx={{ background: "#5AB2FF" }} onClick={handleClear} disabled={!canvasTools.lastX || !canvasTools.lastY || isClear} variant="contained">
                <Typography fontWeight={"strong"} variant="subtitle2">Clear</Typography>
            </Button>
        </Box>
    </Box>
}