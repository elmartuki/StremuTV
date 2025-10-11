import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navegacion = useNavigate();

  //   el usuario se guarda en localstorage en los USUARIOS =  []
  function obtenerDelLocalStorage() {
    const usuariosDelLocalStorage =
      JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuariosDelLocalStorage;
  }

  function guardarEnLocalStorage(nuevoListado) {
    localStorage.setItem("usuarios", JSON.stringify(nuevoListado));
  }
  function onSubmit(data) {
    try {
      const nuevoUsuario = {
        id: Date.now(),
        email: data.email,
        password: data.password,
        createdAt: new Date().toISOString(),
      };
      console.log(nuevoUsuario);

      // agregarlo al listado
      const listadoUsuariosLS = obtenerDelLocalStorage();
      guardarEnLocalStorage([...listadoUsuariosLS, nuevoUsuario]);
      // guardar el listad o completo de nuevo en localstora
      alert("Usuario registrado con éxito");
      reset();
      // redireccionar al login
      navegacion("/");
    } catch (error) {
      console.log(error);
      alert("NO SE PUDO CREAR EL USUARIO");
    }
  }
  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su email"
          isInvalid={errors.email}
          //   isValid={!errors.email}
          {...register("email", {
            required: "El campo es obligatorio",
            minLength: {
              value: 5,
              message: "Debe ingresar al menos 5 caracteres",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Debe ingresar un email válido",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
        {/* <Form.Control.Feedback type="valid">Bien hecho!</Form.Control.Feedback> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su password"
          isInvalid={errors.password}
          {...register("password", {
            required: "El campo es obligatorio",
            minLength: {
              value: 4,
              message: "Debe ingresar al menos 4 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>{" "}
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}
