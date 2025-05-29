package ccp.proyectos.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.http.converter.HttpMessageNotReadableException;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.HttpRequestMethodNotSupportedException;

import jakarta.validation.ConstraintViolationException;
import jakarta.validation.ConstraintDeclarationException;

import java.time.LocalDateTime;
import java.util.HashMap;

@RestControllerAdvice
public class ManejoGlobalExcepciones {

    // Maneja errores cuando una declaración de restricción es inválida (por ejemplo, anotaciones de validación mal configuradas)
    @ExceptionHandler(ConstraintDeclarationException.class)
    public ResponseEntity<HashMap<String, String>> manejoDeConstraintDeclaration(ConstraintDeclarationException ex) {
        HashMap<String, String> respuesta = new HashMap<>();
        respuesta.put("mensaje", ex.getLocalizedMessage());
        respuesta.put("timestamp", LocalDateTime.now().toString());
        return new ResponseEntity<>(respuesta, HttpStatus.BAD_REQUEST);
    }

    // Maneja errores cuando el cuerpo de la petición no se puede interpretar correctamente (JSON mal formado, etc.)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<HashMap<String, String>> manejoDeHttpMessage(HttpMessageNotReadableException ex) {
        HashMap<String, String> respuesta = new HashMap<>();
        respuesta.put("mensaje", ex.getLocalizedMessage());
        respuesta.put("timestamp", LocalDateTime.now().toString());
        return new ResponseEntity<>(respuesta, HttpStatus.BAD_REQUEST);
    }

    // Maneja errores de validación cuando se usa @Valid en un metodo y hay errores en el binding de datos
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<HashMap<String, String>> manejoDeValidacion(MethodArgumentNotValidException ex) {
        HashMap<String, String> respuesta = new HashMap<>();
        respuesta.put("mensaje", ex.getBindingResult().getAllErrors().get(0).getDefaultMessage());
        respuesta.put("timestamp", LocalDateTime.now().toString());
        return new ResponseEntity<>(respuesta, HttpStatus.BAD_REQUEST);
    }

}
