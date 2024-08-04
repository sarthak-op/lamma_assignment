import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/navBar";
import Home from "./Pages/Home/home";
import ProjectList from "./Pages/Projects/projects";
import Upload from "./Pages/Upload/upload";
import Setting from "./Pages/Setting/setting";
import Transcript from "./Pages/Transcript/transcript";
import Widget from "./Pages/Widget/widget";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Navbar />
                <ProjectList />
              </>
            }
          />
          <Route path="/upload/:id" element={<>{<Upload />}</>} />

          <Route
            path="/setting"
            element={
              <>
                <Setting />
              </>
            }
          />
          <Route
            path="/transcript/:id"
            element={
              <>
                <Transcript />
              </>
            }
          />
          <Route
            path="/widget"
            element={
              <>
                <Widget />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
