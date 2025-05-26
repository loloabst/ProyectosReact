package ccp.proyectos.config;

import ccp.proyectos.entities.Proyecto;
import ccp.proyectos.repositories.ProyectoRepositorio;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ProyectoRepositorio proyectoRepositorio;

    public DataInitializer(ProyectoRepositorio proyectoRepositorio) {
        this.proyectoRepositorio = proyectoRepositorio;
    }

    @Override
    public void run(String... args) {
        if (proyectoRepositorio.count() == 0) {

            //  2025-05-24
            Calendar cal1 = Calendar.getInstance();
            cal1.set(2025, Calendar.MAY, 24);
            Date fecha1 = cal1.getTime();

            //  2025-04-10
            Calendar cal2 = Calendar.getInstance();
            cal2.set(2025, Calendar.APRIL, 10);
            Date fecha2 = cal2.getTime();

            // crear registros
            Proyecto proyecto1 = new Proyecto(
                    null,
                    "Sistema Web",
                    "Sitio corporativo",
                    fecha1,
                    "Ana",
                    "Activo",
                    12000f
            );

            Proyecto proyecto2 = new Proyecto(
                    null,
                    "App Móvil",
                    "Aplicación Android",
                    fecha2,
                    "Luis",
                    "Finalizado",
                    18000f
            );

            // Guardar en la base de datos
            proyectoRepositorio.save(proyecto1);
            proyectoRepositorio.save(proyecto2);
        }
    }
}
