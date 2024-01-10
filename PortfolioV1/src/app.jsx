import Header from "./components/Header.jsx";
import Projects from "./pages/projects-old.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import ProjectsPage from "./pages/projects.jsx";
import "./App.css";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Header></Header>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="projects" element={<ProjectsPage />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
