# 🐳 Instrucciones para levantar el proyecto con Docker (Spring Boot + React)

## 1. Clonar el repositorio

```bash
git clone https://github.com/loloabst/ProyectosReact.git
cd ProyectosReact
```

---

## 2. Levantar todos los contenedores

```bash
docker compose up 
```

Esto inicia:

- MySQL en el puerto `3306`
- Spring Boot (API REST) en `http://localhost:8081/`
- React frontend en `http://localhost:3000`

---

## Endpoints disponibles (API REST)

- `GET    /api/v1/proyectos` → Listar todos
- `GET    /api/v1/proyectos/{id}` → Buscar por ID
- `POST   /api/v1/proyectos` → Crear nuevo
- `PUT    /api/v1/proyectos/{id}` → Reemplazar completo
- `PATCH  /api/v1/proyectos/{id}` → Actualizar parcial
- `DELETE /api/v1/proyectos/{id}` → Eliminar

Base URL: `http://localhost:8081/api/v1/proyectos`

---

## Interfaz Web (React)

Accede desde tu navegador en:

```
http://localhost:3000
```

La aplicación permite:

- Ver lista de proyectos
- Crear nuevo
- Editar
- Eliminar

---


