import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./themes";
import Calendar from "./scenes/calendar/calendar";
import Mydata from "./scenes/Mydata";
import WhoIam from "./scenes/whoIam"
import Education from "./scenes/Education"
import Experience from "./scenes/Experience"
import Projects from "./scenes/Projects"
import AA from "./scenes/AA"
function DashboardApp() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

 return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="d-app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/Mydata" element={ <Mydata />} />
              <Route path="/whoIam" element={ <WhoIam />} />
              <Route path="/Education" element={ <Education />} />
              <Route path="/experience" element={ <Experience />} />
              <Route path="/Projects" element={ <Projects />} />
              <Route path="/AA" element={ <AA />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default DashboardApp;