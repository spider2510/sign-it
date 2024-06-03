import { Box, Typography } from "@mui/material"
import { Canvas } from "./Component/Canvas"
import { Tools } from "./Component/Tools"

export const SignPage = () => {
    return <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
        <Typography variant={"h4"} color={"#89e6da"}> Draw Your Signature</Typography>
        <Tools />
        <Canvas />
    </Box>
}