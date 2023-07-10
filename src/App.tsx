import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@components/navbar";
import Rent from "@pages/rent";
import Buy from "@pages/buy";
import Home from "@pages/home";


function App() {

  // Operações de um aplicativo de aluguel de apartamento (locatário)
  // Consulta de anúncios (filtros)
  // Conversa com o locador
  // Realização da reserva

  return (
    
      <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </Router>
    </>  
  
  )
}

export default App
