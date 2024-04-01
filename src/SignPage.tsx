import { Box, Typography } from "@mui/material"
import { Canvas } from "./Component/Canvas"
import { Tools } from "./Component/Tools"
import { useState } from "react"

export const SignPage = () => {
    const [strokeStyle, setStorkeStyle] = useState<any>()
    const [lineWidth, setLineWidth] = useState<number>(5)
    return <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
        <Typography variant={"h4"} color={"#89e6da"}> Draw Your Signature</Typography>
        <Tools strokeStyle={strokeStyle} setStorkeStyle={setStorkeStyle} lineWidth={lineWidth} setLineWidth={setLineWidth} />
        <Canvas strokeStyle={strokeStyle} lineWidth={lineWidth} />
    </Box>
}