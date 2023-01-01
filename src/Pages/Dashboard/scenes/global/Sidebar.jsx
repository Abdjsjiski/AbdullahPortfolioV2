import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css"
import { tokens } from "../../themes";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandymanIcon from '@mui/icons-material/Handyman';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import HelpIcon from '@mui/icons-material/Help';
import SchoolIcon from '@mui/icons-material/School';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
  
    <MenuItem className="menu"
      active={selected === title}
      style={{
        color: colors.grey[200],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="container">
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  My Portfolio
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={require(`../../../../assets/Abdullah.jpg`)}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Abdullah Khan
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Avid Software Engineeer Wanna-be
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"} >
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h4"
              color={colors.grey[300]}
              className="Data" sx={{ m: "15px 0px 20px" }}
            >
            About Me!
            </Typography>
            <Item
              title="Who I Am!"
              to="/whoIam"
              icon={<EmojiPeopleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contact Me!"
              to="/form"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Education!"
              to="/Education"
              icon={<SchoolIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Skills & Tools!"
              to="/Experience"
              icon={<HandymanIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Projects!"
              to="/Projects"
              icon={<DesignServicesIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Achievemnts and Awards!"
              to="/AA"
              icon={<EmojiEventsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Future Goals!"
              to="/team"
              icon={<PrecisionManufacturingIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="FAQ's!"
              to="/faq"
              icon={<HelpIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h4"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px"}}
              className="features"
            >
              Extra Features
            </Typography>
            <Item
              title="Pie Chart!"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts!"
              to="/contacts"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="A Calendar!"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  </div>
  );
};


export default Sidebar;