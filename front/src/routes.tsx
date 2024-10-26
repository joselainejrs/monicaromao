import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Agendar from './pages/agendar/Agendar';
import Perfil from './pages/perfil/Perfil';
// import Menu from './components/Menu';
// import Perfil from './pages/perfil/Perfil';

// Definir as rotas no arquivo separado
export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/agendar" element={<Agendar />} />
      <Route path="/perfil" element={<Perfil />} />
       {/* Pagina em construção */}
       {/* <Route path="*" element={<NotFound />} /> */}
      {/* <Route path="/contact" element={<Perfil />} /> */}
    
    </Routes>
    </BrowserRouter>
  );
};
