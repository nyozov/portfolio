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
import "./projects.css";
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import orderlyImg from '../images/orderly_img.png'
import aircallImg from '../images/aircall_img.png'

const images = [
  {
    url: therapifyImg,
    title: 'Therapify',
    width: '30%',
  },
  {
    url: 'https://github.com/nyozov/scheduler/raw/master/docs/creating-interview.png?raw=true',
    title: 'Scheduler',
    width: '30%',
  },
  {
    url: 'https://github.com/nyozov/weather-app/raw/master/public/weather-app-gif.gif?raw=true',
    title: 'Weather App',
    width: '30%',
  },
  {
    url: 'https://github.com/nyozov/tinyapp/raw/master/docs/urls-page.png?raw=true',
    title: 'TinyApp',
    width: '30%',
  },
  {
    url: orderlyImg,
    title: 'Orderly',
    width: '30%',
  },
  {
    url: aircallImg,
    title: 'Aircall',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
      
    },
    '& .MuiTypography-root': {
      border: '4px solid',
      background: "",
      boxShadow: '2px 2px 5px black',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "-webkit-linear-gradient(45deg, #8d85df 30%, #85dfd5 90%)",
    textShadow:"1px 1px 5px black",
      
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
export default function MyProjects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div className="projects">
      <Box sx={{ marginTop:'25px',justifyContent:'center', display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '90%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            minHeight:'220px',
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </div>
  );
}
