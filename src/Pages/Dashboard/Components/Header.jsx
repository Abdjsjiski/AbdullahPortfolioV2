import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../themes";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const name = ` Hey ${window.localStorage.getItem("name")}!! ` 
  return (
    <Box mb="80px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
      >
        {name} {title} 
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;