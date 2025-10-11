import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { guardarEnSessionStorage } from "../../utils/localStorage.js";

export default function FormLogin() {
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

  function onSubmit(data) {
    console.log(data);
    // obtener el listado de todos los usuarios
    const usuariosDelLocalStorage = obtenerDelLocalStorage();
    console.log(usuariosDelLocalStorage);
    // verificar que el usuario exista en el listado de arriba
    const usuarioExistente = usuariosDelLocalStorage.find((usuario) => {
      return usuario.email === data.email;
    });
    console.log(usuarioExistente);
    // si existe, reviso que la contraseña este bien
    if (!usuarioExistente) {
      alert("EMAIL o PASSWORD INCORRECTO - EMAIL!");
      return;
    }

    if (usuarioExistente.password !== data.password) {
      alert("EMAIL o PASSWORD INCORRECTO - PASSWORD!");
      return;
    }
    // guardar el usuario en sessionStorage
    guardarEnSessionStorage("usuario", usuarioExistente);
    // mostrar un alerta al usuario
    alert("Inicio de sesión EXITOSO!");
    // resetear el formulario
    reset();
    // redireccionar al tablero de admin
    navegacion("/");
  }

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
          {errors?.password?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Iniciar Sesión
      </Button>
    </Form>
  );
}
