import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { editarAlumno } from "../../services/alumnos.service.js";

export default function ModalEditarAlumno({
  showEditar,
  setShowEditar,
  alumnoEditar,
  setAlumnos,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombre: "",
      urlImagen: "",
      pasatiempo: "",
      marca: "",
      pelicula: "",
    },
  });

  // Cuando el modal se abra, llenamos el formulario con los datos del alumno
  useEffect(() => {
    if (alumnoEditar) {
      setValue("nombre", alumnoEditar.nombre);
      setValue("urlImagen", alumnoEditar.urlImagen);
      setValue("pasatiempo", alumnoEditar.pasatiempo);
      setValue("marca", alumnoEditar.marca);
      setValue("pelicula", alumnoEditar.pelicula);
    }
  }, [alumnoEditar]);

  function onSubmit(data) {
    // Editamos el alumno en localStorage
    editarAlumno("alumnos", alumnoEditar.id, data);

    Swal.fire({
      title: "¡Alumno editado!",
      text: `${data.nombre} se actualizó correctamente`,
      icon: "success",
    });

    // Actualizamos la lista de alumnos en el estado padre
    const alumnosActualizados = JSON.parse(localStorage.getItem("alumnos"));
    setAlumnos(alumnosActualizados);

    reset();
    setShowEditar(false);
  }

  return (
    <div className={`modal ${showEditar ? "d-block" : "d-none"}`}>
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <h5>Editar Alumno</h5>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                {...register("nombre", { required: true, minLength: 3 })}
                isInvalid={errors.nombre}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL Imagen</Form.Label>
              <Form.Control
                type="text"
                {...register("urlImagen", { required: true })}
                isInvalid={errors.urlImagen}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pasatiempo</Form.Label>
              <Form.Control
                type="text"
                {...register("pasatiempo", { required: true })}
                isInvalid={errors.pasatiempo}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                {...register("marca", { required: true })}
                isInvalid={errors.marca}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Película</Form.Label>
              <Form.Control
                type="text"
                {...register("pelicula", { required: true })}
                isInvalid={errors.pelicula}
              />
            </Form.Group>
            <Button type="submit" className="me-2">
              Guardar Cambios
            </Button>
            <Button variant="secondary" onClick={() => setShowEditar(false)}>
              Cancelar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
