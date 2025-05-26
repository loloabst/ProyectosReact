package ccp.proyectos.services.interfaces;

import ccp.proyectos.entities.Proyecto;

import java.util.List;
import java.util.Optional;

public interface IProyectoServicio {
    List<Proyecto> listarProyectos();

    Optional<Proyecto> buscarProyectoPorId(Long idProyecto);

    Proyecto crearProyecto(Proyecto proyecto);

    Proyecto actualizarProyecto(Proyecto proyecto);

    Proyecto eliminarProyecto(Long idProyecto);
}
