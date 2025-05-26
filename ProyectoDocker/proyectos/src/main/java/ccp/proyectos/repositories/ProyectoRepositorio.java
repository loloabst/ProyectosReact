package ccp.proyectos.repositories;

import ccp.proyectos.entities.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProyectoRepositorio extends JpaRepository<Proyecto, Long> {
}
