import { styled, Typography,Grid,Box } from "@mui/material"
import React from "react"
import Cube from "../../assets/cube.png"
import PlaneImage from "../../assets/Work.png"
import { motion } from "framer-motion"

const Title = styled(Typography)(({theme})=>({
  color:"white",
  fontWeight:"515",
}))
const ContentTitle = styled(Grid)(({theme})=>({
  background :theme.palette.background.paper,
  padding:"6px 8px 4px 8px",
  clipPath:"polygon(99.78% 108.33%, -0.88% 113.89%, -0.88% -11.12%, 91.23% -13.89%)",
}))

const Triangle=styled(Box)({
  height:"45px",
  width:"40px",
  background:"#B712A5",
  clipPath:"polygon(80.64% 47.94%, 1.39% 88.89%, 3.67% 0.24%, 78.25% 44.23%)"
})

const item={
  hide:{
    opacity:0,
    y:200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  }
}

export function ObjectifSection(){
  const viewportConfig = {
    once: true,
    margin: "320px",
  };
  return(
    <>
    <Box sx={{marginTop:"40px"}} component={motion.div} variants={item} initial='hide' whileInView="show" viewport={viewportConfig}>
    <Grid container >
      <Grid xs={12} md={7} sx={{zIndex:"99"}}   component={motion.div} variants={item}>
        <Box>
        <ContentTitle
        sx={{  width:{xs:"100vw",sm:"380px"},marginLeft:{xs:"0",sm:"4px"}}}
            container>
            <Grid xs={10}>
            <Title sx={{fontSize:{xs:"16px",sm:"20px"}}}>
              OBJECTIFS
            </Title>          
            </Grid>
            <Grid xs={2}>
              <img style={{width:"auto",height:"25px"}} src={Cube} alt=''/>
            </Grid>
        </ContentTitle> 
        <Box className="content-Objectif" p={2}>
          <Grid container sx={{marginBottom:"9px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"9px",fontSize:{xs:"16px",sm:"20px"}}}>
                INNOVER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"9px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"9px",fontSize:{xs:"16px",sm:"20px"}}}>
                DÉVELOPPER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"9px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"9px",fontSize:{xs:"16px",sm:"20px"}}}>
                ÉCHANGER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"9px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"9px",fontSize:{xs:"16px",sm:"20px"}}}>
                ORIENTER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"9px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"9px",fontSize:{xs:"16px",sm:"20px"}}}>
                INITIER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"9px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"9px",fontSize:{xs:"16px",sm:"20px"}}}>
                RECRUTER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"9px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"9px",fontSize:{xs:"16px",sm:"20px"}}}>
                RÉSEAUTER
              </Title>
            </Grid>
          </Grid>
        </Box>
        </Box>       
      </Grid>
      <Grid xs={0} md={4} sx={{zIndex:"1"}}>
        <Box component={motion.img}  sx={{marginLeft:"-165px",width:"50vw",height:"auto",paddingLeft:"-127px",marginTop:"116px",display:{xs:"none",md:"inline-block"}}} src={PlaneImage} alt=""/>
      </Grid>
    </Grid>

    </Box>


    </>
  )
}