import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgregarProyecto() {
    let navegacion = useNavigate();

    const [proyecto, setProyecto] = useState({
        nombre: '',
        descripcion: '',
        fechaInicio: '',
        responsable: '',
        estado: '',
        presupuesto: ''
    });

    const { nombre, descripcion, fechaInicio, responsable, estado, presupuesto } = proyecto


    const onInputChange = (e) => {
        //spread
        setProyecto({ ...proyecto, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8081/api/v1/proyectos/";
        await axios.post(urlBase, proyecto);
        //redirigimos a pag inicio
        navegacion('/');
    }

    return (
        <div className='container'>
            <div className='container text-center' style={{ margin: "30px" }}>
                <h3>Agregar Proyecto</h3>
            </div>

            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre de Proyecto</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" required={true}
                        value={nombre} onChange={(e) => onInputChange(e)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="descripcion" name="descripcion" required={true}
                        value={descripcion} onChange={(e) => onInputChange(e)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="fechaInicio" className="form-label">Fecha de Inicio</label>
                    <input type="date" className="form-control" id="fechaInicio" name="fechaInicio" required={true}
                        value={fechaInicio} onChange={(e) => onInputChange(e)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="responsable" className="form-label">Responsable</label>
                    <input type="text" className="form-control" id="responsable" name="responsable" required={true}
                        value={responsable} onChange={(e) => onInputChange(e)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <select
                        className="form-select"
                        id="estado"
                        name="estado"
                        value={estado}
                        onChange={onInputChange}
                        required
                    >
                        <option value="">Selecciona un estado</option>
                        <option value="Activo">Activo</option>
                        <option value="Suspendido">Suspendido</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                </div>


                <div className="mb-3">
                    <label htmlFor="presupuesto" className="form-label">Presupuesto</label>
                    <input type="number" className="form-control" id="presupuesto" name="presupuesto" required={true}
                        value={presupuesto} onChange={(e) => onInputChange(e)} />
                </div>

                <div className='text-center'>
                    <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
                    <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
                </div>


            </form>

        </div>
    )
}
