import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "@domain/common/components/navbar";
import Footer from "@domain/common/components/footer/footer";
import Rent from "@pages/rent";
import Home from "@pages/home";

function App() {
  return (
      <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
        </Routes>
        <Footer/>
      </Router>
    </>  
  
  )
}

export default App;
