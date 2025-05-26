package ccp.proyectos.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "proyectos")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class Proyecto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre_proyecto", nullable = false, length = 50)
    @NotBlank(message = "El nombre no puede estar en blanco")
    @NotNull(message = "El nombre no puede ser nulo")
    private String nombre;

    @NotBlank(message = "La descripción no puede estar en blanco")
    @NotNull(message = "La descripción no puede ser nula")
    @Column(name = "descripcion_proyecto", columnDefinition = "VARCHAR(500)")
    private String descripcion;

    @NotNull(message = "La fecha de inicio no puede ser nula")
    @Column(name = "fecha_inicio")
    @Temporal(TemporalType.DATE)
    private Date fechaInicio;

    @NotBlank(message = "El responsable no puede estar en blanco")
    @NotNull(message = "El responsable no puede ser nulo")
    @Column(name = "responsable", length = 100)
    private String responsable;

    @NotBlank(message = "El estado no puede estar en blanco")
    @NotNull(message = "El estado no puede ser nulo")
    @Column(name = "estado", length = 20)
    private String estado;

    @NotNull(message = "El presupuesto no puede ser nulo")
    @Column(name = "presupuesto")
    private Float presupuesto;
}
