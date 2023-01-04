import { styled, Typography,Grid,Box } from "@mui/material"
import React from "react"
import Pyramide from "../../assets/pyramide.png"
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
const Para1 = styled(Typography)({
  color:"white",
  textTransform:"uppercase",
  fontSize:"15px",
  fontWeight:"510",
  
})
const Para2 = styled(Typography)({
  color:"white",
  fontSize:"15px",
  fontWeight:"510",
  
})


const Triangle=styled(Box)({
  height:"25px",
  width:"20px",
  background:"#B712A5",
  clipPath:"polygon(80.64% 47.94%, 1.39% 88.89%, 3.67% 0.24%, 78.25% 44.23%)"
})
const Rond=styled(Box)({
  height:"16px",
  width:"16px",
  background:"linear-gradient(45deg,  #B712A5 10%, #7181F7 90%)",
  borderRadius:"100%",
  border:"0.5px solid #eaeaea"
})

const item={
  hide:{
    opacity:0,
    y:400
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  }
}

export function PlaneSection(){
  const viewportConfig = {
    once: true,
    margin: "320px",
  };
  return(
    <>
    <Box sx={{marginTop:"40px"}} component={motion.div} variants={item} initial='hide' whileInView="show" viewport={viewportConfig}>
          <ContentTitle
            sx={{  width:{xs:"100vw",sm:"380px"},marginLeft:{xs:"0",sm:"4px"}}}
          variants={item}
          component={motion.div}
          viewport={viewportConfig}
          initial="hide"
          whileInView="show"
          container>
          <Grid xs={10}>
           <Title sx={{fontSize:{xs:"16px",sm:"20px"}}}>
             PLAN DE COMMUNICATION
           </Title>          
          </Grid>
          <Grid xs={2} >
             <img style={{width:"auto",height:"25px"}} src={Pyramide} alt=''/>
           </Grid>
         </ContentTitle>
    <Grid container >
      <Grid xs={12} md={7} sx={{zIndex:"99"}}   component={motion.div} variants={item}>
          <Box sx={{marginBottom:"30px"}}>
            <Grid container sx={{paddingLeft:"12px",marginTop:"8px"}}>
              <Grid xs={0.7}>
                <Triangle/>
              </Grid>
              <Grid xs={7}>
                <Para1>
                  durée de compagne : 6 semaines
                </Para1>        
              </Grid>
            </Grid>
            <Grid container sx={{paddingLeft:"12px",marginTop:"8px"}}>
              <Grid xs={0.7}>
                <Triangle/>
              </Grid>
              <Grid xs={7}>
                <Para1>
                  début de compagne : jeudi 06 octobre 2022
                </Para1>        
              </Grid>
            </Grid>      
          </Box>
          <Box>
              <Grid container sx={{paddingLeft:"12px"}}>
                <Grid xs={0.7}>
                  <Rond/>
                </Grid>
                <Grid xs={7}>
                  <Para2>
                    1 points de presse avant l'événements
                  </Para2>        
                </Grid>
              </Grid>      
              <Grid container sx={{paddingLeft:"12px",marginTop:"4px"}}>
                <Grid xs={0.7}>
                  <Rond/>
                </Grid>
                <Grid xs={7}>
                  <Para2>
                    1 points de presse après l'événements
                  </Para2>        
                </Grid>
              </Grid>         
              <Grid container sx={{paddingLeft:"12px",marginTop:"4px"}}>
                <Grid xs={0.7}>
                  <Rond/>
                </Grid>
                <Grid xs={7}>
                  <Para2>
                    200 spots dans  les radios de la capital
                  </Para2>        
                </Grid>
              </Grid>       
              <Grid container sx={{paddingLeft:"12px",marginTop:"4px"}}>
                <Grid xs={0.7}>
                  <Rond/>
                </Grid>
                <Grid xs={7}>
                  <Para2>
                    200 spots TV : TV plus ,VIVA , TVM , Real TV
                  </Para2>        
                </Grid>
              </Grid>       
              <Grid container sx={{paddingLeft:"12px",marginTop:"4px"}}>
                <Grid xs={0.7}>
                  <Rond/>
                </Grid>
                <Grid xs={11}>
                  <Para2>
                    20 publications sur 1/4 de page dans presse écrite à partir du début de compagne
                  </Para2>        
                </Grid>
              </Grid>       
              <Grid container sx={{paddingLeft:"12px",marginTop:"4px"}}>
                <Grid xs={0.7}>
                  <Rond/>
                </Grid>
                <Grid xs={7}>
                  <Para2>
                    Site WEB de l'événement
                  </Para2>        
                </Grid>
              </Grid>       
              <Grid container sx={{paddingLeft:"12px",marginTop:"4px"}}>
                <Grid xs={0.7}>
                  <Rond/>
                </Grid>
                <Grid xs={7}>
                  <Para2>
                    Sponsoring sur les réseaux sociaux : LinkdIn et Facebook
                  </Para2>        
                </Grid>
              </Grid>          
              <Grid container sx={{paddingLeft:"12px",marginTop:"4px"}}>
                <Grid xs={0.7}>
                  <Rond/>
                </Grid>
                <Grid xs={7}>
                  <Para2>
                    6 panneaux du format 2X3 : Tanà et périphérie
                  </Para2>        
                </Grid>
              </Grid>       
              <Grid container sx={{paddingLeft:"12px",marginTop:"4px"}}>
                <Grid xs={0.7}>
                  <Rond/>
                </Grid>
                <Grid xs={7}>
                  <Para2>
                    Magazine édition Spéciale de l'événement
                  </Para2>        
                </Grid>
              </Grid> 
          </Box>        
      </Grid>
      <Grid xs={0} md={4} sx={{zIndex:"1"}}>
        <Box component={motion.img}  sx={{marginLeft:"-145px",width:"50vw",height:"auto",paddingLeft:"-127px",marginTop:"83px",display:{xs:"none",md:"inline-block"}}} src={PlaneImage} alt=""/>
      </Grid>
    </Grid>

    </Box>


    </>
  )
}