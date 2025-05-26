import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';


export default function ListadoProyectos() {

    const urlBase = "http://localhost:8081/api/v1/proyectos/";
    const[proyectos, setProyectos] = useState([]);

    useEffect(() => {
        cargarProyectos();

    }, []);

    const cargarProyectos = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado de cargar proyectos");
        console.log(resultado.data);
        setProyectos(resultado.data);
    }

    const eliminarProyecto = async (id) => {
        const confirmacion = window.confirm("¿Estás seguro de eliminar este proyecto?");
        if (!confirmacion) return;

        await axios.delete(`${urlBase}${id}`);
        cargarProyectos(); // recarga la lista actualizada
    };

  return (
    <div className="container">
        <div className="container text-center" style={{margin:"30px"}}>
            <h3>Sistema de Proyectos</h3>
        </div>

            <table className="table table-stripped table-hover align-middle">
    <thead className='table-dark'>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre Proyecto</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Fecha de Inicio</th>
        <th scope="col">Responsable</th>
        <th scope="col">Estado</th>
        <th scope="col">Presupuesto</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        {
        //iteramos el arreglo
        proyectos.map((proyecto, indice) => (
            <tr key={indice}>
                <th scope="row">{proyecto.id}</th>
                <td>{proyecto.nombre}</td>
                <td>{proyecto.descripcion}</td>
                <td>{proyecto.fechaInicio}</td>
                <td>{proyecto.responsable}</td>
                <td>{proyecto.estado}</td>
                <td><NumericFormat value ={proyecto.presupuesto}
                    displayType={'text'}
                    thousandSeparator=',' prefix={'$'}
                    decimalScale={2} fixedDecimalScale/>
                </td>
                <td className='text-center'>
                    <div>
                        <Link to={`/editar/${proyecto.id}`}
                        className='btn btn-warning btn-sm me-3'>editar</Link>
                        <button 
                        onClick={()=> eliminarProyecto(proyecto.id)}
                        className='btn btn-danger btn-sm'
                        >Eliminar</button>
                    </div>
                </td>
        </tr>
        ))
        }
    </tbody>
    </table>

    </div>
    

    
  )
}
