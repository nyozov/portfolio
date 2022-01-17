import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { teal } from "@mui/material/colors";
import { withTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { shadows } from "@mui/system";
import { makeStyles, withStyles } from "@mui/styles";
import ColorButton from "./TealButton";


const resume_link = process.env.REACT_APP_RESUME_LINK;
const github_link = process.env.REACT_APP_GITHUB_LINK;
const linkedin_link = process.env.REACT_APP_LINKEDIN_LINK;



const useStyles = makeStyles((theme) => ({}));
const CustomColor = withStyles({
  root: {
    fontSize: 20,
    background: "-webkit-linear-gradient(45deg, #8d85df 30%, #85dfd5 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow:"1px 1px 1px rgba(255, 255, 255, 0.4)",
  }
})(Typography);

export default function nameBox() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: 400,
            height: 200,
            color: "white",
            backgroundColor: "rgba(0,0,30,0.4)",
            p: 5,
            marginLeft: "-30%",
            borderRadius: 2,
            textAlign:'center'
            // "&:hover": {
            //   backgroundColor: "primary.main",
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }}
        >
          <Grid container justifyContent='center' spacing={0}>
            <Grid item xs={8}>
          <CustomColor>
            <Typography fontFamily='NeueMachina' gutterBottom variant='h4' fontWeight="750">
            Nick Yozov
            </Typography>
            </CustomColor>
          </Grid>
          <Grid item xs={8} marginTop='-25px' marginBottom='25px'>
          <p>A Web Developer</p>
          </Grid>
          </Grid>
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center" }}
            spacing={1}
          >
            <Grid item>
              <a target="_blank" href={resume_link}>
                <ColorButton variant="contained"><Typography fontFamily='NeueMachina' >My Resume</Typography></ColorButton>
              </a>
            </Grid>

            <Grid item>
              <a target="_blank" href={github_link}>
                <GitHubIcon
                  sx={{
                    width: 32,
                    height: 32,
                    "&:hover": {
                      color: "rgba(255, 255, 255, 0.4)",
                    },
                  }}
                />
              </a>
            </Grid>
            <Grid item>
              <a target="_blank" href={linkedin_link}>
                <LinkedInIcon
                  sx={{
                    width: 35,
                    height: 35,
                    "&:hover": {
                      color: "rgba(255, 255, 255, 0.4)",
                    },
                  }}
                />
              </a>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
