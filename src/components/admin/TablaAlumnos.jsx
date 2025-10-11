import FilaAlumno from "./FilaAlumno";

export default function TablaAlumnos({
  alumnos,
  setAlumnoEditar,
  setShowEditar,
  fetchAlumnos,
}) {
  return (
    <div className="table-responsive justify-content-center m-4">
      {alumnos.length === 0 ? (
        <h2>Aún No hay alumnos creados, vuelvas prontos</h2>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Pasatiempo</th>
              <th>Marca</th>
              <th>Película</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno, indice) => {
              return (
                <FilaAlumno
                  alumno={alumno}
                  key={indice}
                  setAlumnoEditar={setAlumnoEditar}
                  setShowEditar={setShowEditar}
                  fetchAlumnos={fetchAlumnos}
                ></FilaAlumno>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
