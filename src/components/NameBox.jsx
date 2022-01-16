import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const resume_link = process.env.REACT_APP_RESUME_LINK;
const github_link = process.env.REACT_APP_GITHUB_LINK;
const linkedin_link = process.env.REACT_APP_LINKEDIN_LINK;

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

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
            backdropFilter: "blur(5px)",
            p: 5,
            marginLeft: "-30%",
            borderRadius: 2,
            // "&:hover": {
            //   backgroundColor: "primary.main",
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }}
        >
          <h2>Nick Yozov</h2>
          <p>A Web Developer</p>
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center" }}
            spacing={1}
          >
            <Grid item>
              <a target="_blank" href={resume_link}>
                <ColorButton variant="contained">My Resume</ColorButton>
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
