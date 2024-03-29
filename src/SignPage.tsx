import { Box, Typography } from "@mui/material"
import { Canvas } from "./Component/Canvas"
import { Actions } from "./Component/Action"
import { Tools } from "./Component/Tools"

export const SignPage = () => {
    return <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
        <Typography variant={"h4"} color={"#B0A695"}> Draw Your Signature</Typography>
        <Tools />
        <Canvas />
        {/* <Actions /> */}
    </Box>
}