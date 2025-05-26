import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarProyecto() {
    const navegacion = useNavigate();
    const { id } = useParams(); // obtiene el id desde la URL

    const [proyecto, setProyecto] = useState({
        nombre: '',
        descripcion: '',
        fechaInicio: '',
        responsable: '',
        estado: '',
        presupuesto: ''
    });

    const { nombre, descripcion, fechaInicio, responsable, estado, presupuesto } = proyecto;

    const onInputChange = (e) => {
        setProyecto({ ...proyecto, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = `http://localhost:8081/api/v1/proyectos/${id}`;
        await axios.put(urlBase, proyecto);
        navegacion('/');
    };

    const cargarProyecto = async () => {
        try {
            const resultado = await axios.get(`http://localhost:8081/api/v1/proyectos/${id}`);
            setProyecto(resultado.data);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert("Proyecto no encontrado.");
                navegacion('/');
            } else {
                console.error("Error al cargar proyecto:", error);
            }
        }
    };


    useEffect(() => {
        cargarProyecto();
    }, []);

    return (
        <div className='container'>
            <div className='container text-center' style={{ margin: "30px" }}>
                <h3>Editar Proyecto</h3>
            </div>

            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" required
                        value={nombre} onChange={onInputChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="descripcion" name="descripcion" required
                        value={descripcion} onChange={onInputChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="fechaInicio" className="form-label">Fecha de Inicio</label>
                    <input type="date" className="form-control" id="fechaInicio" name="fechaInicio" required
                        value={fechaInicio} onChange={onInputChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="responsable" className="form-label">Responsable</label>
                    <input type="text" className="form-control" id="responsable" name="responsable" required
                        value={responsable} onChange={onInputChange} />
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
                    <input type="number" className="form-control" id="presupuesto" name="presupuesto" required
                        value={presupuesto} onChange={onInputChange} />
                </div>

                <div className='text-center'>
                    <button type="submit" className="btn btn-success btn-sm me-3">Actualizar</button>
                    <a href='/' className='btn btn-secondary btn-sm'>Cancelar</a>
                </div>
            </form>
        </div>
    );
}
