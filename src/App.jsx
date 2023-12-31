import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { History } from "./components/Pages/History";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import backgroundImg from './/img/bg-palmeras.png'

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/History" element={<History />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  </div>
  );
}

export default App;


