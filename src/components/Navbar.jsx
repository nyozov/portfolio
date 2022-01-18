import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../index.css'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { withStyles, makeStyles } from '@mui/styles';
import { Link } from 'react-scroll'

const useStyles = makeStyles((theme) => ({}));
const CustomColor = withStyles({
    root: {
      
      color:'rgba(255,255,255, 0.8)',
      
      "&:hover": {
        background: "-webkit-linear-gradient(45deg, #8d85df 30%, #85dfd5 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow:"1px 1px 1px rgba(255, 255, 255, 0.4)",
        textDecorationLine: 'underline'
            },
    }
  })(Typography);
  
export default function ButtonAppBar() {


  return (
    <Box sx={{ flexGrow: 1, width: '100vw'}} >
      <AppBar sx={{
        width:'90%',
        position:'relative',
        
        background:'transparent'
        
        
        

        
        
        
        
        
        

        }}
       elevation={0} className='nav1' >
        <Toolbar sx={{justifyContent:'right'}}>
      
          <Button  color="inherit">
          <Link 
        activeClass="active"
         className="test1"
          to="scrollprojects"
           spy={true}
            smooth={true}
             duration={500} >
          <CustomColor>
            <Typography fontFamily='NeueMachina'>
              Projects
              </Typography>
              </CustomColor>
              </Link>
              </Button>
              
              <Button  color="inherit">
                <CustomColor>
            <Typography fontFamily='NeueMachina'>
              Contact
              </Typography>
              </CustomColor>
              </Button>
              
              
        </Toolbar>
      </AppBar>
    </Box>
  );
}