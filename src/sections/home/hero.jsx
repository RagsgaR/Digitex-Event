import { Box, Grid,styled,Typography, useTheme } from "@mui/material";
import React from "react";
import BG from "../../assets/Background.jpg"
import { Space } from "../../config/space";
import Lieux from "../../assets/Lieux.svg"





const Title=styled(Typography)(({theme})=>({
  paddingTop:"12px",
  color:theme.palette.primary.contrastText
}))

function dateDiff(staticDate,currentDate){
  var diff ={}

    var tmp =staticDate - currentDate
    tmp = Math.floor(tmp/1000)
    diff.sec =  tmp % 60;

    tmp = Math.floor((tmp - diff.sec)/60)
    diff.min = tmp % 60;

    tmp = Math.floor((tmp - diff.min)/60)
    diff.hour = tmp % 24;

    tmp = Math.floor((tmp - diff.hour)/24);
    diff.day = tmp;

    if(diff.sec < 0 ){
      diff.sec = 0;
      diff.min = 0;
      diff.hour = 0;
      diff.day = 0;
    return diff
    }else{
      return diff
    }
}

export default function HeroSection() {
    const theme=useTheme()
    const [currentDate,setCurrentDate]=React.useState(null)
    const [minuteur,setMinuteur]=React.useState('')
    const containerRef = React.useRef(null)
    const [height,setHeight] = React.useState(0)
    

    React.useEffect(()=>{
      const staticDate =new Date('2023-03-29T08:00:00')
      setCurrentDate(new Date())
      setMinuteur(dateDiff(staticDate,currentDate));
    },[currentDate,minuteur])

    React.useEffect(()=>{
      setHeight(containerRef.current.offsetHeight + 20);
    
    },[currentDate]);





  return (
    <>
      <Box sx={{paddingTop:{xs:"66px",md:"82px"}}}>
        <Box >
          <Box sx={{position:"relative"}}>
            <Box component={"img"}  src={BG} sx={{width:'99.8vw',height:height,position:"absolute",zIndex:"1"}} alt=""/>
          </Box>
          <Box ref={containerRef} sx={{zIndex:"99",position:"relative",padding:"4px"}}>
            <Grid container >
              <Grid xs={12} sm={6} sx={{display:"grid",padding:{xs:"0px 0 0 20px",md:"65px 0px 0px 65px"}}}>
                  <Title sx={{display:"inline"}}>
                    <Box component={"span"} sx={{fontSize:{xs:"2rem",md:"2.6rem"}}}>SALON</Box>
                    <Box component={"span"} sx={{display:"block",fontWeight:"516",fontSize:{xs:"3rem",md:"4rem"},marginTop:"-7px"}}> DIGITEX</Box> 
                    <Box component={"span"} sx={{display:"block",fontWeight:"516",fontSize:{xs:"3rem",md:"4rem"},marginTop:{xs:"-18px",md:"-27px"}}}> 2023</Box> 
                  </Title>
                  <Typography variant="h6" sx={{color:theme.palette.primary.contrastText,fontSize:{xs:"1rem",md:"1.25rem"}}}>
                    Digitalisation-Technologie-Externalisation
                  </Typography>
                  <Typography variant="body1" sx={{color:theme.palette.primary.contrastText,position:"relative",top:"16px",width:"300px",fontSize:{xs:"0.8rem",md:"1rem"}}}>
                    " La transition numérique au coeur du développement "
                  </Typography>
              </Grid>
              <Grid xs={12} sm={6} sx={{padding:{xs:"20px 0px 0px 0px",md:"20px 85px 0px 0px"}}}>
                <Grid container>
                  <Grid xs={12} sx={{padding:{xs:"0px 10px 0px 0px",md:"0"}}}>
                    <Typography variant="h4" sx={{color:theme.palette.primary.contrastText,float:"right",fontSize:{xs:"2.25rem",md:"2.75rem"}}}>
                      <Box component={"span"}  sx={{display:"block",fontWeight:"521"}}>29-30-31</Box>
                      <Box component={"span"}  sx={{float:"right"}}>Mars</Box>
                    </Typography >
                  </Grid>
                  <Grid xs={12} sx={{position:"relative",top:{xs:"9px",md:"39px"}}}>
                    <Typography sx={{textAlign:"end",color:theme.palette.primary.contrastText,fontSize:{xs:"4vw",sm:"2rem"},paddingRight:{xs:"10px",md:"0"}}}>
                      <Box component={"span"}  sx={{display:"block"}}>Lieu : </Box>
                      <Box component={"img"} sx={{width:{xs:"250",sm:"300px"},height:"auto",marginTop:"15px"}} src={Lieux} alt=""/>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container sx={{marginTop:{xs:"1rem",md:"5.5rem"}}}>
              <Grid xs={0} md={6}></Grid>
              <Grid xs={12} md={6}>
                  <Grid container justifyContent={"center"}>
                    <Typography  sx={{color:theme.palette.primary.contrastText,fontWeight:"512",display:"flex",fontSize:{xs:"2.7rem",sm:"3rem"}}}>
                      <Box component={'span'}>
                          {minuteur.day} 
                        <Box component={"span"}  sx={{display:"block",fontSize:"1rem",textAlign:"center"}}>Jours</Box> 

                      </Box>
                      <Space/> : <Space/>
                      <Box component={'span'}>
                          {minuteur.hour}
                        <Box component={"span"}  sx={{display:"block",fontSize:"1rem",textAlign:"center"}}>Heurs</Box> 

                      </Box>
                       <Space/> : <Space/>
                      <Box component={'span'}>
                          {minuteur.min} 
                        <Box component={"span"}  sx={{display:"block",fontSize:"1rem",textAlign:"center"}}>Minute</Box> 

                      </Box>
                       <Space/> : <Space/>
                      <Box component={'span'}>
                          {minuteur.sec} 
                        <Box component={"span"}  sx={{display:"block",fontSize:"1rem",textAlign:"center"}}>second</Box> 

                      </Box>
                    </Typography>
                  </Grid>
              </Grid>
            </Grid>               
          </Box>
        </Box>

      </Box>
    </>
  );
}
