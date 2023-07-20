import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@domain/common/components/navbar";
import Rent from "@pages/rent";
import Home from "@pages/home";


function App() {

  // Operações de um aplicativo de aluguel de apartamento (locatário)
  // Consulta de anúncios (filtros)
  // Conversa com o locador
  
  // Realização da reserva < esse nao

  return (
      <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
        </Routes>
      </Router>
    </>  
  
  )
}

export default App
