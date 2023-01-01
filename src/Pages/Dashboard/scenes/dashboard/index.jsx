import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import { mockTransactions } from "../../data/mockData";
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import SchoolIcon from '@mui/icons-material/School';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddIcon from '@mui/icons-material/Add';
import Header from "../../Components/Header";
import LineChart from "../../Components/LineChart";
import GeographyChart from "../../Components/GeographyChart";
import BarChart from "../../Components/BarChart";
import StatBox from "../../Components/StatBox";
import ProgressCircle from "../../Components/ProgressCircle";
import styled from "styled-components"

const H = styled.div`
  text-align: center;
  
  `
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  function hello(){
    const ans = prompt("Enter message to see on notifcation: ")
    localStorage.setItem("ans", ans)
  }
  return (
  <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <H>
        <Header title="Welcome to my Portfolio Dashboard" subtitle="Created as an Admin Dashboard, modified for my portfolio"/>  
        </H>
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "12px",
              fontWeight: "bold",
              padding: "10px 20px",
              marginTop: "100px"
            }}
            onClick={()=> hello()}
          >
            <EditNotificationsIcon sx={{ mr: "9px",}}/>
            Add A notifcation message for Fun!!
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Honor Roll"
            subtitle="2020-2022"
            progress="0.90"
            increase="+90%"
            icon={
              <SchoolIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Passion for"
            subtitle="Aeronautical Engineering"
            progress="0.05"
            increase="5%"
            icon={
              <DeveloperBoardIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Community Service"
            subtitle="Helped teach Tennis"
            progress="0.50"
            increase="50h"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Stuff to Add"
            subtitle="to this portfolio"
            progress="0.85"
            increase="85%"
            icon={
              <AddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                A Random Line graph I thought was cool and my dream Salary
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $100,000 / year as a CS Engineer
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              My Current Report
            </Typography>
          </Box>
          {mockTransactions.map((transaction ) => (
            <Box
              key={`${transaction.txId}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Passion for Computer Science
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
            99% I love it but I do want to keep my mind open to other possibilities
            </Typography>
            <Typography> </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Favourite Food
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            I live in Mississauga, Ontario, Canada
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;