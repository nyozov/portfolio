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
import './projects.css'

export default function MyProjects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div className='projects'>
      <Grid container sx={{width:'50%'}}>
    
      <Grid
        marginTop="25px"
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 9 }}
        
        
    
      >
        
        <Grid item md={6}>
        <div data-aos="slide-up" >
          <Card
            sx={{ maxWidth: 450, background: "transparent", color: "white", borderRadius:'10px'}}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={therapifyImg}
                alt="therapify image"
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
        <Grid item md={6}>
        <div data-aos="slide-up" data-aos-easing='ease-in-out' >
          <Card sx={{ maxWidth: 450, background: "transparent", borderRadius:'10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://github.com/nyozov/scheduler/raw/master/docs/creating-interview.png?raw=true"
                alt="scheduler image"
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
        <Grid item md={6}>
          <Card sx={{ maxWidth: 450, background:'transparent', borderRadius:'10px'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://github.com/nyozov/weather-app/raw/master/public/weather-app-gif.gif?raw=true"
                alt="weather image"
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
        <Grid item md={6}>
          <Card sx={{ maxWidth: 450, background:'transparent', borderRadius:'10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src="https://github.com/nyozov/tinyapp/raw/master/docs/urls-page.png?raw=true"
                alt="tinyapp image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="white">
                  TinyApp
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                Full stack CRUD app built with Node and Express that allows users to shorten long URLs.
                
                
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
      </Grid>
      </Grid>
    </div>
  );
}
