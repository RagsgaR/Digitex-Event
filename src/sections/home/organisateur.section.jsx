import React from "react"
import { Box, Typography, useTheme } from "@mui/material"
import Wyrai from "../../assets/logo wyrai-1.png"



export function Organisateur(){
  const theme = useTheme()
  return (
    <Box mt={"5rem"} p={4} sx={{height:"203px",background:"blue"}}>
      <Typography variant="h4" sx={{color:theme.palette.primary.contrastText,fontWeight:"512",fontFamily:"initial",fontSize:{xs:"2.25rem",md:"2.75rem"}}}>
        Organisateur du salon :
      </Typography>
      <Box component={"img"} src={Wyrai} alt="" sx={{width:"200px",height:"auto"}}/>
                  
    </Box>
  )
}