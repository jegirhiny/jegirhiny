import { Route, BrowserRouter, Routes } from "react-router-dom";
import Skills from "./components/skills/skills.component";
import Landing from "./components/landing/landing.component";
import Contact from "./components/contact/contact.component";
import Projects from "./components/featured-projects/featured-projects.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
