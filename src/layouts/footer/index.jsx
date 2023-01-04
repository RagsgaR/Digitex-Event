import { Box, Grid, Stack, Avatar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Phone } from "@mui/icons-material";
import { Markunread } from "@mui/icons-material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hide: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};
export default function Footer() {
  const viewportConfig = {
    once: true,
    margin: "320px",
  };
  return (
    <Box mt={"5rem"}>
      <motion.footer
        component={motion.div}
        variants={container}
        initial="hide"
        whileInView="show"
        viewport={viewportConfig}
      >
        <Stack
          height={300}
          justifyContent="space-between"
          sx={{
            backgroundColor: "#27215F",
            // overflow: "hidden",
            position: "relative",
            width: "100vw",
            // left: 10,
            // right: 10,
            // height: "80vh",
            height:"auto",
            paddingBottom:{xs:"0",md:"100px"}
          }}
          component={motion.div}
          variants={item}
          initial="hide"
          whileInView="show"
          viewport={viewportConfig}
        >
          <Box p={2} sx={{paddingTop:"42px"}}>
            <Grid container>
              <Grid xs={12} sm={6} md={4} sx={{paddingLeft:"3vw"}}>
                <Typography component={motion.div} variants={item} sx={{fontSize:"36px",fontFamily:"initial",fontWeight:"538",marginBottom:"22px",textAlign:{xs:"center",sm:"start"}}} color="white">
                    Contact
                </Typography>
                <Typography component={motion.div} variants={item} sx={{fontSize:"15px",display:"flex",alignItems:"center",marginBottom:"5px",textAlign:{xs:"center",sm:"start"},justifyContent:{xs:"center",sm:"start"}}} color="white">
                  <Phone/>  &#160; (+261) 32 02  442 38 
                </Typography>
                <Typography component={motion.div} variants={item} sx={{fontSize:"15px",display:"flex",alignItems:"center",marginBottom:"5px",textAlign:{xs:"center",sm:"start"},justifyContent:{xs:"center",sm:"start"}}} color="white">
                  <Phone/> &#160; (+261) 34 44 471 31
                </Typography>
                <Typography component={motion.div} variants={item} sx={{fontSize:"15px",display:"flex",alignItems:"center",textAlign:{xs:"center",sm:"start"},justifyContent:{xs:"center",sm:"start"}}} color="white">
                  <Markunread/> &#160; digitex.mdg@gmail.com
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={4}>
              <Typography component={motion.div} variants={item} sx={{fontSize:"36px",fontFamily:"initial",fontWeight:"538",marginBottom:"22px",textAlign:{xs:"center",sm:"start"}}} color="white">
                    Infos Pratique
                </Typography>
                <Typography component={motion.div} variants={item} sx={{fontSize:"15px",display:"flex",alignItems:"center",marginBottom:"5px",textAlign:{xs:"center",sm:"start"},justifyContent:{xs:"center",sm:"start"}}} color="white">
                  <ArrowForwardIosIcon/> &#160; À propos
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={4}>
                  <Typography component={motion.div} variants={item} sx={{fontSize:"36px",fontFamily:"initial",fontWeight:"538",marginBottom:"22px",textAlign:{xs:"center",md:"start"}}} color="white">
                        nous suivre
                    </Typography>
                    <Typography component={motion.div} variants={item} sx={{fontSize:"15px",display:"flex",alignItems:"center",marginBottom:"5px",textAlign:{xs:"center",md:"start"},justifyContent:{xs:"center",md:"start"}}} color="white">
                      <Avatar>
                        <Facebook sx={{color:"#B712A5"}}/>
                      </Avatar>
                      &#160; &#160;
                      <Avatar>
                        <Twitter sx={{color:"#B712A5"}}/>
                      </Avatar>
                    </Typography>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </motion.footer>
    </Box>
  );
}
