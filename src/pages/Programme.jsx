import React from "react"
import { Box, Grid,styled,Typography, useTheme } from "@mui/material";
import Cube from "../assets/cube.png"

const Title = styled(Typography)(({theme})=>({
  color:"white",
  fontWeight:"515",
}))
const ContentTitle = styled(Grid)(({theme})=>({

  background :theme.palette.background.paper,
  //padding:"6px 8px 4px 8px",
  //clipPath:"polygon(99.78% 108.33%, -0.88% 113.89%, -0.88% -11.12%, 91.23% -13.89%)",
}))

const Triangle=styled(Box)({
  height:"35px",
  width:"31px",
  background:"#B712A5",
  clipPath:"polygon(80.64% 47.94%, 1.39% 88.89%, 3.67% 0.24%, 78.25% 44.23%)"
})
const BigTitle = styled(Typography)(({theme})=>({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
    fontSize:"4rem",
    fontWeight:"516",//#ffd89b → #19547b #ff512f → #dd2476
    background: "-webkit-linear-gradient(45deg, #ff512f 30%, #dd2476 90%)",
    // background: "-webkit-linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  
}))

export default function Programme(){
  const theme=useTheme()
  return(
    <Box sx={{paddingTop:{xs:"66px",md:"0px"}}}>
        <Grid container >
              <Grid xs={12} sm={12} sx={{display:"grid",padding:{xs:"80px 0 0 20px",md:"120px 0px 0px 4vw"}}}>
                  <BigTitle> Programme du salon</BigTitle>
              </Grid>
              <Grid xs={10} sm={12} sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <ContentTitle
                sx={{width:{xs:"100vw",sm:"380px"},marginLeft:{xs:"0",sm:"4px"}, marginBottom:"16px"}}
                    container>
                    <Grid xs={10}>
                    <Title sx={{fontSize:{xs:"16px",sm:"20px"}, paddingTop:"4px"}}>
                      MECREDI 29 MARS
                    </Title>          
                    </Grid>
                    <Grid xs={2}>
                      <img style={{width:"auto",height:"25px"}} src={Cube} alt=''/>
                    </Grid>
                </ContentTitle>
              </Grid>
              <Grid>
                <ContentTitle
                sx={{width:{xs:"100vw",sm:"380px"},marginLeft:{xs:"0",sm:"4px"}, marginBottom:"16px"}}
                    container>
                    <Grid xs={10}>
                    <Title sx={{fontSize:{xs:"16px",sm:"20px"}, paddingTop:"4px"}}>
                      MECREDI 30 MARS
                    </Title>          
                    </Grid>
                    <Grid xs={2}>
                      <img style={{width:"auto",height:"25px"}} src={Cube} alt=''/>
                    </Grid>
                </ContentTitle>
                <ContentTitle
                sx={{width:{xs:"100vw",sm:"380px"},marginLeft:{xs:"0",sm:"4px"}, marginBottom:"16px"}}
                    container>
                    <Grid xs={10}>
                    <Title sx={{fontSize:{xs:"16px",sm:"20px"}, paddingTop:"4px"}}>
                      MECREDI 31 MARS
                    </Title>          
                    </Grid>
                    <Grid xs={2}>
                      <img style={{width:"auto",height:"25px"}} src={Cube} alt=''/>
                    </Grid>
                </ContentTitle>
            </Grid>
          </Grid> 
    </Box>
      
      )
}