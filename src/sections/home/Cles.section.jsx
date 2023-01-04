import React from "react"
import { styled, Typography,Grid,Box } from "@mui/material"
import Cube from "../../assets/cube.png"
import Stand from "../../assets/food-stand.png"
import Book from "../../assets/CapyBook.png"
import Location from "../../assets/location.png"
import GroupsPersonal from "../../assets/GroupePersonal.png"
import ConferenceImage from "../../assets/conference.png"
import { ExpandMore,ExpandLess } from "@mui/icons-material"
import { motion } from "framer-motion"


const ColorFleche="yellow"

const Title = styled(Typography)(({theme})=>({
  fontSize:"20px",
  color:"white",
  fontWeight:"515",
}))
const ContentTitle = styled(Grid)(({theme})=>({
  background :theme.palette.background.paper,
  padding:"6px 8px 4px 8px",
  clipPath:"polygon(99.78% 108.33%, -0.88% 113.89%, -0.88% -11.12%, 91.23% -13.89%)",
}))

const ComponentLogo=styled(Box)(({theme})=>({
  background:theme.palette.background.paper,
  borderRadius:"100%",
  width:{xs:"125px",md:"9.77vw"},
  height:{xs:"65px",md:"9.77vw"},
}))

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

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
function ExpandMoreCode(){
  return(
    <>
    <Grid container sx={{marginLeft:"-8px"}}>
      <Grid xs={12} sx={{marginTop:{xs:"-44px",md:"-12px"}}}>
      <ExpandMore sx={{color:ColorFleche,width:{xs:"43px",md:"135px"},height:{xs:"25px",md:"65px"}}}/>
      </Grid>
      <Grid xs={12} sx={{marginTop:"-52px"}}>
      <ExpandMore sx={{color:ColorFleche,width:{xs:"43px",md:"135px"},height:{xs:"25px",md:"65px"}}}/>
      </Grid>
    </Grid>
    </>
  )
}

function ExpandLessCode(){
  return(
    <>
       <Grid container sx={{marginLeft:"-8px"}}>
        <Grid xs={12} sx={{marginTop:{xs:"-44px",md:"-12px"}}}>
          <ExpandLess sx={{color:ColorFleche,width:{xs:"43px",md:"135px"},height:{xs:"25px",md:"65px"}}}/>
        </Grid>
        <Grid xs={12} sx={{marginTop:"-52px"}}>
          <ExpandLess sx={{color:ColorFleche,width:{xs:"43px",md:"135px"},height:{xs:"25px",md:"65px"}}}/>
        </Grid>
    </Grid>
    </>
  )
}

export function KeyNumbers(){
  const viewportConfig={
    once:true
  }
  return (
    <>
    <Box sx={{marginTop:"30px"}} component={motion.div} initial="hide" whileInView="show" variants={container} viewport={viewportConfig}>
          <ContentTitle
          sx={{  width:{xs:"100vw",sm:"380px"},marginLeft:{xs:"0",sm:"4px"}}}
          container >
            <Grid xs={10} component={motion.div} variants={item}>
              <Title >
               LES CHIFFRES CLÉS
              </Title>          
            </Grid>
            <Grid xs={2}>
              <img style={{width:"auto",height:"25px"}} src={Cube} alt=''/>
            </Grid>
          </ContentTitle>
          <Box sx={{padding:{xs:"0",md:"10px"},marginTop:{xs:"20px",sm:"0"}}}>
          <Grid container sx={{justifyContent:"center"}}>
            <Grid xs={5} md={4} component={motion.div} variants={item}>
              <Grid container>
                <Grid xs={4.5}>
                  <ComponentLogo sx={{width:{xs:"65px",md:"9.77vw"},height:{xs:"65px",md:"9.77vw"}}}>
                    <Box component="img" src={Stand} sx={{width:{xs:"45px",md:"65px"},height:"auto",marginTop:{xs:"3.56vw",sm:"2.34vw"},marginLeft:{xs:"2.56vw",sm:"2.34vw"}}} alt=""/>
                  </ComponentLogo> 
                </Grid>
                <Grid xs={7.5} p={4} sx={{marginTop:{xs:"-20px",md:"0"}}}>
                  <Title sx={{textAlign:"center",borderBottom:`4px solid ${ColorFleche}`,fontSize:{xs:"10px",md:"1.56vw"},}}>
                    <span style={{color:"#B712A5"}}>+ 5000 </span>
                    VISITEURS ATTENDUS
                    </Title>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={5} component={motion.div} variants={item}>
            <Grid container>
                <Grid xs={4.5} >
                  <ComponentLogo sx={{width:{xs:"65px",md:"9.77vw"},height:{xs:"65px",md:"9.77vw"}}}>
                    <Box component="img"  src={Book} sx={{width:{xs:"45px",md:"65px"},height:"auto",marginTop:{xs:"3.56vw",sm:"2.34vw"},marginLeft:{xs:"2.56vw",sm:"2.34vw"}}} alt=""/>
                  </ComponentLogo> 
                </Grid>
                <Grid xs={7.5} p={4}>
                  <Title sx={{textAlign:"center",borderBottom:`4px solid ${ColorFleche}`,fontSize:{xs:"10px",md:"1.56vw"}}}>
                    <span style={{color:"#B712A5"}}>+ 10 </span>
                    CONFÉRENCES
                    </Title>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={2}>
                  <ComponentLogo sx={{width:{xs:"65px",md:"9.77vw"},height:{xs:"65px",md:"9.77vw"}}}>
                    <Box component="img" src={Location} sx={{width:{xs:"45px",md:"65px"},height:"auto",marginTop:{xs:"2.56vw",sm:"2.34vw"},marginLeft:{xs:"2.56vw",sm:"2.34vw"}}} alt=""/>
                  </ComponentLogo> 
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs={5} md={4} component={motion.div} variants={item}  sx={{marginLeft:{xs:"0",md:"52px"},marginTop:{xs:"30px",md:"0"}}}>
              <Grid container>
                <Grid xs={5} sx={{marginTop:{xs:"0",sm:"14px"}}}>
                  <Grid container>
                    <Grid xs={12}  sx={{marginLeft:{xs:"22px",md:"0"}}}>
                       <ExpandMoreCode/>
                    </Grid>
                    <Grid  xs={12} sx={{marginTop:{xs:"-12px",md:"0"}}}>
                      <Title sx={{textAlign:"center",borderBottom:`4px solid ${ColorFleche}`,marginLeft:{xs:"0",md:"-34px"},fontSize:{xs:"10px",md:"1.56vw"}}}>
                        <span style={{color:"#B712A5"}}>+ 100 </span>
                        STANDS
                      </Title>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={7} sx={{marginTop:{xs:"0px",md:"-32px"}}}>
                  <Grid container>
                    <Grid xs={12} sx={{paddingLeft:{xs:"35px",md:"52px"}}}>
                        <ExpandLessCode/>
                    </Grid>
                    <Grid xs={12} sx={{marginTop:"-12px",paddingLeft:{xs:"14px",md:"52px"}}}>
                      <ComponentLogo sx={{width:{xs:"65px",md:"9.77vw"},height:{xs:"65px",md:"9.77vw"}}}>
                        <Box component="img" src={GroupsPersonal}  sx={{width:{xs:"45px",md:"65px"},height:"auto",marginTop:{xs:"13px",sm:"2.34vw"},marginLeft:{xs:"11px",sm:"2.34vw"}}} alt=""/>
                      </ComponentLogo>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={5} md={4} component={motion.div} variants={item}  sx={{marginLeft:{xs:"0",md:"52px"},marginTop:{xs:"30px",md:"0"}}}>
            <Grid container  sx={{marginTop:{xs:"0",sm:"14px"}}}>
                <Grid xs={5} sx={{marginLeft:{xs:"27px"}}}>
                  <Grid container sx={{marginLeft:{xs:"0",md:"-52px"}}} >
                    <Grid xs={12}>
                       <ExpandMoreCode/>
                    </Grid>
                    <Grid  xs={12}>
                      <Title sx={{textAlign:"center",borderBottom:`4px solid ${ColorFleche}`,marginLeft:"-34px",fontSize:{xs:"10px",md:"1.56vw"}}}>
                        <span style={{color:"#B712A5"}}>+ 7 </span>
                        UNIVERS THÉMATIQUES
                      </Title>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={7} sx={{marginTop:{xs:"-32px",md:"-172px"},marginLeft:{xs:"12vw",sm:"15vw"}}}>
                  <Grid container>
                    <Grid xs={12} sx={{paddingLeft:{xs:"72px",md:"4.06vw"}}}>
                        <ExpandLessCode/>
                    </Grid>
                    <Grid xs={12} sx={{marginTop:"-12px",paddingLeft:"52px"}}>
                      <ComponentLogo sx={{width:{xs:"65px",md:"9.77vw"},height:{xs:"65px",md:"9.77vw"}}}>
                        <Box component="img" src={ConferenceImage} sx={{width:{xs:"45px",md:"65px"},height:"auto",marginTop:{xs:"13px",sm:"2.34vw"},marginLeft:{xs:"11px",sm:"2.34vw"}}} alt=""/>
                      </ComponentLogo>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={2} md={2} component={motion.div} variants={item}  sx={{marginLeft:{xs:"0",md:"52px"}}}>
            <Grid container sx={{marginLeft:{xs:"16px",sm:"0"},marginTop:{xs:"32px",sm:"44px",lg:"0"}}}>
                    <Grid xs={12} sx={{marginLeft:{xs:"0",sm:"22px",lg:"0"}}}>
                       <ExpandMoreCode/>
                    </Grid>
                    <Grid  xs={11} sx={{marginLeft:{xs:"22px",sm:"0"}}}>
                      <Title sx={{textAlign:"center",borderBottom:`4px solid ${ColorFleche}`,marginLeft:"-34px",fontSize:{xs:"10px",md:"1.56vw"},width:{xs:"34px",sm:"auto"}}}>
                        <span style={{color:"#B712A5"}}>+ 1000 </span>
                        m2 DE SURFACE COUVERTE
                      </Title>
                    </Grid>
            </Grid>
            </Grid>
          </Grid>

          </Box>
          </Box>
    </>
  )
}