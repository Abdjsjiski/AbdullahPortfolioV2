import { Box, IconButton, useTheme} from "@mui/material";
import { ColorModeContext, tokens } from "../../themes";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import 'react-dropdown/style.css';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import "./Topbar.css";
import logo from '../../../../assets/notify.png';
import React, {useState, useEffect, useRef, useContext} from 'react';
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);
  const title = localStorage.getItem("ans")
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1, width: "200px" }} placeholder="A Serach bar that doesn work" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
        <div className="App">
      <div className='menu-container' ref={menuRef} style={{marginTop: "50px", }}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}} style={{margin: "5px 20px 30px 30px",}}>
          <img src={logo} alt="something" style={{width: "25px", height: "25px", backgroundColor: "white", borderRadius: "60px"}}/>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} style={{marginTop: "-90px"}}>
          <h3>Touch Anywhere to Exit<br/><span>Project Made by Abdullah Khan </span></h3>
          <div style={{backgroundColor: "lightgrey"}}> 
            <h3 marginTop="-100px" style={{color: "black",}}> {title}</h3>
          </div>
        </div>
      </div>
    </div>
        </IconButton>
        <IconButton style={{fontSize: "16px", }}>
          <Link to="/Mydata" className="settings">
              <ManageAccountsIcon color="action" />
          </Link>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;;