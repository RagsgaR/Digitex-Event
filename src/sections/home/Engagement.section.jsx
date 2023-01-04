import React from "react"
import { Grid,Typography,styled,Box } from "@mui/material"
import Main2 from "../../assets/Creation/main2.png"
import Statistique from "../../assets/Creation/Statistique.png"
import Parameter from "../../assets/Creation/Parameter.png"
import { motion } from "framer-motion"
import Conference from "../../assets/Creation/Conference.png"
import { Space } from "../../config/space"


const ContentTitle = styled(Grid)(({theme})=>({
  background: theme.palette.background.paper,
  padding:"6px 8px 4px 8px",
  clipPath:"polygon(99.78% 108.33%, -0.88% 113.89%, -0.88% -11.12%, 91.23% -13.89%)",
}))

const Title = styled(Typography)(({theme})=>({
  color:"white",
  fontWeight:"515",
}))
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


export function EngagementSection(){
  const viewportConfig={
    once:true,
  }
  return(
    <>
    <Box mt={"2rem"} component={motion.div} initial="hide" whileInView="show" viewport={viewportConfig}>
         <ContentTitle
          component={motion.div} variants={item}
            sx={{  width:{xs:"100vw",sm:"680px"},marginLeft:{xs:"0",sm:"4px"}}}
            container>
            <Title sx={{fontSize:{xs:"16px",sm:"20px"},paddingRight:{xs:"5px",sm:"0"}}}>
             DEVENEZ PARTICIPANT ET RÉSERVEZ VOTRE EMPLACEMENT
            </Title> 
          </ContentTitle> 
      <Box sx={{display:{xs:"none",md:"block"}}}>
       <Grid container justifyContent={"center"} sx={{paddingTop:"22px"}}>
        <Grid xs={5}>
          <Grid container 
          component={motion.div} variants={item}>
            <Grid xs={3}>
              <img src={Main2} width="120" hieght='120' alt=""/>
            </Grid>
            <Grid xs={9}>
              <Title>
                <span style={{display:"block",color:"orange",fontSize:"30px"}}>1/</span>
                <span style={{color:"#B712A5"}}>RENCONTREZ</span>
                <Space/> un <Space/>
                <span style={{color:"#B712A5"}}>PUBLIC QUALIFIÉ</span>
                : Des professionnels du secteurs ,des acheteurs et consommateurs potentiels,des investisseurs,
              </Title>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={5}>
         <Grid container 
          component={motion.div} variants={item}>
            <Grid xs={3}>
              <img src={Statistique} width="120" hieght='120' alt=""/>
            </Grid>
            <Grid xs={9}>
              <Title>
                <span style={{display:"block",color:"orange",fontSize:"30px"}}>3/</span>
                <span style={{color:"#B712A5"}}>RENFORCER</span> 
                <Space/> votre notoriété  et  <Space/>
                <span style={{color:"#B712A5"}}>DÉVELOPPER</span>
                votre activité
              </Title>
            </Grid>
          </Grid>
        </Grid>
       </Grid>

       <Grid container justifyContent={"center"} sx={{paddingTop:"22px"}}>
        <Grid xs={5} 
          component={motion.div} variants={item}>
          <Grid container>
            <Grid xs={3}>
              <img src={Parameter} width="120" hieght='120' alt=""/>
            </Grid>
            <Grid xs={9}>
              <Title>
                <span style={{display:"block",color:"orange",fontSize:"30px"}}>2/</span>
                <span style={{color:"#B712A5"}}>Présenter</span>
                <Space/> vos <Space/>
                <span style={{color:"#B712A5"}}>PRODUITS</span>,
                <span style={{color:"#B712A5"}}>SAVOIR-FAIRE</span>  <Space/> et   <Space/>
                <span style={{color:"#B712A5"}}>SERVICES</span>  <Space/>
                dans un cadre dynamique et stimulant
              </Title>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={5}>
         <Grid container 
          component={motion.div} variants={item}>
            <Grid xs={3}>
              <img src={Conference} width="120" hieght='120' alt=""/>
            </Grid>
            <Grid xs={9}>
              <Title>
                <span style={{display:"block",color:"orange",fontSize:"30px"}}>4/</span>
                <span style={{color:"#B712A5"}}>RENCONTRES</span> 
                <Space/> et  <Space/>
                <span style={{color:"#B712A5"}}>PROFESSIONNELS</span> <Space/>
                du secteur et développer votre réseau de prescripteurs
              </Title>
            </Grid>
          </Grid>
        </Grid>
       </Grid>
      </Box>
      {/* responsive */}
      <Box sx={{display:{xs:"block",md:"none"}}}>
      <Grid container justifyContent={"center"} sx={{paddingTop:"22px"}}>
        <Grid xs={12}>
          <Grid container 
          justifyContent={"center"}
          component={motion.div} variants={item}>
            <Grid xs={4} sm={2}>
              <img src={Main2} width="120" hieght='120' alt=""/>
            </Grid>
            <Grid xs={8}>
              <Title>
                <span style={{display:"block",color:"orange",fontSize:"30px"}}>1/</span>
                <span style={{color:"#B712A5"}}>RENCONTREZ</span>
                <Space/> un <Space/>
                <span style={{color:"#B712A5"}}>PUBLIC QUALIFIÉ</span>
                : Des professionnels du secteurs ,des acheteurs et consommateurs potentiels,des investisseurs,
              </Title>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Grid container
          justifyContent={"center"}
          component={motion.div} variants={item}r>
            <Grid xs={4} sm={2}>
              <img src={Parameter} width="120" hieght='120' alt=""/>
            </Grid>
            <Grid xs={8}>
              <Title>
                <span style={{display:"block",color:"orange",fontSize:"30px"}}>2/</span>
                <span style={{color:"#B712A5"}}>Présenter</span>
                <Space/> vos <Space/>
                <span style={{color:"#B712A5"}}>PRODUITS</span>,
                <span style={{color:"#B712A5"}}>SAVOIR-FAIRE</span>  <Space/> et   <Space/>
                <span style={{color:"#B712A5"}}>SERVICES</span>  <Space/>
                dans un cadre dynamique et stimulant
              </Title>
            </Grid>
          </Grid>
        </Grid>
       </Grid>
       <Grid container justifyContent={"center"} sx={{paddingTop:"22px"}}>
        <Grid xs={12}>
         <Grid container 
         justifyContent={"center"}
          component={motion.div} variants={item}>
            <Grid xs={4} sm={2}>
              <img src={Statistique} width="120" hieght='120' alt=""/>
            </Grid>
            <Grid xs={8}>
              <Title>
                <span style={{display:"block",color:"orange",fontSize:"30px"}}>3/</span>
                <span style={{color:"#B712A5"}}>RENFORCER</span> 
                <Space/> votre notoriété  et  <Space/>
                <span style={{color:"#B712A5"}}>DÉVELOPPER</span>
                votre activité
              </Title>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12}>
         <Grid container 
          justifyContent={"center"}
          sx={{marginTop:"20px"}}
          component={motion.div} variants={item}>
            <Grid xs={4} sm={2}>
              <img src={Conference} width="120" hieght='120' alt=""/>
            </Grid>
            <Grid xs={8}>
              <Title>
                <span style={{display:"block",color:"orange",fontSize:"30px"}}>4/</span>
                <span style={{color:"#B712A5"}}>RENCONTRES</span> 
                <Space/> et  <Space/>
                <span style={{color:"#B712A5"}}>PROFESSIONNELS</span> <Space/>
                du secteur et développer votre réseau de prescripteurs
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