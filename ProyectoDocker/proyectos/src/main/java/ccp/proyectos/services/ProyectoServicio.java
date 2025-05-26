package ccp.proyectos.services;

import ccp.proyectos.entities.Proyecto;
import ccp.proyectos.repositories.ProyectoRepositorio;
import ccp.proyectos.services.interfaces.IProyectoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProyectoServicio implements IProyectoServicio {
    @Autowired
    private ProyectoRepositorio proyectoRepositorio;

    @Override
    public List<Proyecto> listarProyectos() {
        return proyectoRepositorio.findAll();
    }

    @Override
    public Optional<Proyecto> buscarProyectoPorId(Long idProyecto) {
        return proyectoRepositorio.findById(idProyecto);
    }

    @Override
    public Proyecto crearProyecto(Proyecto proyecto) {
        return proyectoRepositorio.save(proyecto);
    }

    @Override
    public Proyecto actualizarProyecto(Proyecto proyecto) {
        Optional<Proyecto> proyectoExistente = proyectoRepositorio.findById(proyecto.getId());
        if (proyectoExistente.isPresent()) {
            Proyecto actualizado = proyectoExistente.get();
            actualizado.setNombre(proyecto.getNombre());
            actualizado.setDescripcion(proyecto.getDescripcion());
            actualizado.setFechaInicio(proyecto.getFechaInicio());
            actualizado.setResponsable(proyecto.getResponsable());
            actualizado.setEstado(proyecto.getEstado());
            actualizado.setPresupuesto(proyecto.getPresupuesto());
            return proyectoRepositorio.save(actualizado);
        }
        return null;
    }

    @Override
    public Proyecto eliminarProyecto(Long idProyecto) {
        Optional<Proyecto> proyecto = proyectoRepositorio.findById(idProyecto);
        if (proyecto.isPresent()) {
            proyectoRepositorio.deleteById(idProyecto);
            return proyecto.get();
        }
        return null;
    }
}
