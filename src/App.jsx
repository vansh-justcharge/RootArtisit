import About from "./pages/About"
import GetInTouch from "./pages/GetInTouch";
import GetScouted from "./pages/GetScouted";
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Models from "./pages/Models";
import ModelDetails from "./pages/ModelDetails";

function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/getintouch" element={<GetInTouch></GetInTouch>} />
        <Route path="/getscouted" element={<GetScouted></GetScouted>} />
        <Route path="/models" element={<Models></Models>} />
         <Route path="/model/:name" element={<ModelDetails></ModelDetails>} />
      </Routes>
    </Router>
  )
}

export default App
