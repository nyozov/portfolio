import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
const ColorButton = styled(Button)(({ theme }) => ({

  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  boxShadow: "1px 1px 6px rgba(255, 255, 255, 0.7)",
  "&:hover": {
    background: "#85dfd5",
    boxShadow: "1px 1px 6px rgba(255, 255, 255, 0.7)",
    color: 'black',
    textShadow:'1px 1px 5px rgba(255, 255, 255, 0.7)'
  },
}));

export default ColorButton