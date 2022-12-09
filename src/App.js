
//importando componentes do router
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from './pages/home';
import {Login} from './pages/login';
import {Feed} from './pages/feed';
import {Cadastro} from './pages/cadastro';

//retorna html 
function App() {
  return (
    <Router>
      <Routes> {/* elemento que renderiza de acordo com o path: */}
        <Route path="/" element={<Home />} /> {/* aparentemente tem q ter a maiuscula */}
        <Route path="/login" element={<Login />} /> {/* componente soh usa um <> */}
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
