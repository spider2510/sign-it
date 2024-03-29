import { Box, Button } from "@mui/material"
import { useRef, useState } from "react"


export const Canvas = (props: { strokeStyle?: string, lineJoin?: string, lineWidth?: string }) => {
    const { strokeStyle, lineJoin, lineWidth } = props
    const [isDrawing, setIsDrawing] = useState(false)
    const [enableDownload, setEnableDownload] = useState(false)
    const [lastX, setLastX] = useState(0)
    const [lastY, setLastY] = useState(0)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        setIsDrawing(true)
        setEnableDownload(true)
        setLastX(event.nativeEvent.offsetX)
        setLastY(event.nativeEvent.offsetY)
    }

    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!isDrawing || !canvasRef) return
        const canvas = canvasRef.current
        if (!canvas) return
        const context = canvas.getContext('2d')
        if (!context) return
        context.strokeStyle = "#OOO"
        context.lineJoin = "round"
        context.lineCap = "round"
        context.lineWidth = 3

        context.beginPath()
        context.moveTo(lastX, lastY)
        context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY)

        context.stroke()
        setLastX(event.nativeEvent.offsetX)
        setLastY(event.nativeEvent.offsetY)
    }

    const handleMouseUp = (_event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        setIsDrawing(false)
    }


    const handleMouseOut = (_event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        setIsDrawing(false)
    }

    const handleClear = () => {
        const canvas = canvasRef.current
        if (!canvas) return
        const context = canvas.getContext('2d')
        if (!context) return
        context.clearRect(0, 0, canvas.width, canvas.height)
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
            style={{ border: "3px  solid #F3EEEA", borderRadius: 5, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        </canvas>
        <Box display={"flex"} flexDirection={"row-reverse"} gap={2}>
            <Button onClick={handleClear} disabled={!lastX || !lastY} variant="outlined">
                Clear
            </Button>
            <Button onClick={handleDownload} disabled={!lastX || !lastY} variant="contained">
                Download
            </Button>
        </Box>
    </Box>
}