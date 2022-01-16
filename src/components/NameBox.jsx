import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid'

export default function nameBox() {
  return (
    <div>
      <div style={{
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         minHeight: "100vh"
    }}>
    
      <Box
       
       sx={{
         width: 400,
         height: 200,
         color: 'white',
         backgroundColor: 'rgba(0,0,30,0.4)',
         backdropFilter: 'blur(5px)',
         p: 5,
         marginLeft: '-30%',
         borderRadius: 2,
         '&:hover': {
           backgroundColor: 'primary.main',
           opacity: [0.9, 0.8, 0.7],
           
          },
        }}>
        <h2>
          Nick Yozov
        </h2>
        <p>
          A Web Developer
        </p>
      </Box>
    </div>
    </div>
  )
}