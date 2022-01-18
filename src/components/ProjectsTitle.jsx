import { Typography } from "@mui/material"
import { Element } from "react-scroll"

export default function ProjectsTitle() {
  return (
    <div >
       <Element name="scrollprojects"/>
    <Typography
    marginTop="25px"
    fontFamily="NeueMachina"
    variant="h4"
    color="white"
    textAlign='center'
  >
    Latest Projects
  </Typography>
  </div>
  )
}