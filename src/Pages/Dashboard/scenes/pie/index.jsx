import { Box } from "@mui/material";
import Header from "../../Components/Header";
import PieChart from "../../Components/PieChart";
import styled from "styled-components"
const Oox = styled.div`
text-align: center;
`
const Pie = () => {
  return (
    <Box m="20px">
      <Oox>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      </Oox>
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;