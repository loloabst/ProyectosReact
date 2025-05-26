import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navegacion from "./plantilla/Navegacion";
import ListadoProyectos from "./proyectos/ListadoProyectos";
import AgregarProyecto from "./proyectos/AgregarProyecto";
import EditarProyecto from "./proyectos/EditarProyecto";

function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <Navegacion/>
          <Routes>
            <Route exact path='/' element={<ListadoProyectos/>}/>
            <Route exact path='/agregar' element={<AgregarProyecto/>}/>
            <Route exact path='/editar/:id' element={<EditarProyecto/>}/>
          </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
