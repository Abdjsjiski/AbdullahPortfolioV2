import { Box, useTheme } from "@mui/material";
import Header from "../../Components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../themes";
import styled from "styled-components"
const H = styled.div`
text-align: center;
  `
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
<div className="body">
    <Box m="20px">
      <H>
      <Header title="Here are some other stuff I added" subtitle="Frequently Asked Questions Page" />
      </H>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are your Hobbies and Interests?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Video Games</li>
              <li>Artficial Intelligence</li>
              <li>Drawing, Sketching / Painting</li>
              <li>Theatrical</li>
              <li>GFX and VFX and cinematography and animation</li>
              <li>Archery</li>
              <li>Mindfulness</li>
              <li>Chess</li>
              <li>Music</li>
              <li>Photography</li>
              <li>Book Clubs</li>
              <li>Board Games</li>
              <li>Baking</li>
              <li>Yoga</li>
              <li>Languages</li>
              <li>Volunteering</li>
              <li>Public Speaking</li>
              <li>Learning about other People</li>
              <li>Blog Writing</li>
              <li>and obvoisly Computer Science / Software Engineering</li>





              </ul> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What are your Sports?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The below are the sports i have tried and the ones i liked are marked (F)
           <ul>
           <li>Basketball(F)</li>
           <li>Ice Skating</li>
           <li>Hockey</li>
           <li>Football</li>
           <li>Tennis(F)</li>
           <li>Swimming(F)</li>
           <li>Volleyball</li>
           <li>Skiing / Snowboarding (F)</li>
           <li>Cycling(F)</li>
           <li>Baseball(F)</li>





           </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What your favourite color and Why?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Orange because it represents fire, strength and is bright which are all properties I like espcially fire because it gives heat and keeps your warm.
            My second favorite color is blue, because its everything opposite to fire, so its a nice balance!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Other Cool stuff
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In this section I will put stuff I like here
            <ul>
              <li>Search up: Param.me, Thats my idol i.e my freind he is also a Software Engineer, whatever he likes I usually like lol</li>
              <li>Nothing else prolly in one year when I update this there will be a massive increase</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do people describe you?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Kind</li>
              <li>Outgoing</li>
              <li>Hyperactive</li>
              <li>Smart</li>
              <li>An amazing ranter</li>
              <li>Weird at times</li>
              <li>Shareful</li>
              <li>Respectful</li>
              <li>Loves to Perservare</li>
              <li>Has a lack of self trust and courage</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
           As A Company I would like to see your Resume, 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Of course you may view it below</h2>
            <a href="https://docs.google.com/document/d/18s9z-7Kum9dSTC2y5LkyqUwxwAhgsse7jOCPqzeeHTo/edit">Resume</a>
          </Typography>
        </AccordionDetails>
      </Accordion>



      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </Box>
    </div>
  );
};

export default FAQ;