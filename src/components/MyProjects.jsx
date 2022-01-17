import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import therapifyImg from "../images/therapify_login.png";
import ColorButton from "./TealButton";
import Aos from "aos";
import { useEffect } from "react";
export default function MyProjects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div>
        <Typography
          marginTop="25px"
          fontFamily="NeueMachina"
          variant="h4"
          color="white"
        >
          My Projects
        </Typography>

      <Grid
        marginTop="25px"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
        <div data-aos="slide-up" >
          <Card
            sx={{ maxWidth: 345, background: "transparent", color: "white", borderRadius:'10px'}}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={therapifyImg}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Therapify
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                  A tele-health platform which connects a patient and a
                  practitioner through a video chat. Also offers other services
                  such appointment booking.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ColorButton>View Code</ColorButton>
            </CardActions>
          </Card>
          </div>
        </Grid>
        <Grid item xs={6}>
        <div data-aos="slide-up" data-aos-easing='ease-in-out' >
          <Card sx={{ maxWidth: 345, background: "transparent", borderRadius:'10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://github.com/nyozov/scheduler/raw/master/docs/creating-interview.png?raw=true"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="white">
                  Scheduler
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                A React based app that allows the user to book an appointment by selecting a day,
                picking an open spot and selecting an available interviewer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ColorButton>
                View Code
              </ColorButton>
            </CardActions>
          </Card>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345, background:'transparent'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://github.com/nyozov/weather-app/raw/master/public/weather-app-gif.gif?raw=true"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='white'>
                  Weather App
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                A React app where a user can receive weather information from any location in the world that they choose.
                
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ColorButton>
                View Code
              </ColorButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src="/Users/nikolayyozov/react_stuff/portfolio/public/therapify_login.png"
                alt="login"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
