import React from "react";
import { ListaPublicaciones } from "../organisms/ListaPublicaciones";
import { traerDatos } from "../../services/JSONPlaceholder";
import type { Post } from "../../types/Post";

export const HomePage = () => {
  const [cargando, setCargando] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [publicaciones, setPublicaciones] = React.useState<Post[]>([]);

  const fetchDatos = React.useCallback(async () => {
    try {
      const datos = await traerDatos();

      setPublicaciones(datos);
      setCargando(false);

      console.log("Terminé");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }, []);

  const cantidadPublicaciones = React.useMemo(() => {
    return publicaciones.length;
  }, [publicaciones.length]);

  React.useEffect(() => {
    fetchDatos();
  }, [fetchDatos]);

  if (error) return <p>Hubo un error al cargar los datos</p>;

  if (cargando) return <p>Cargando...</p>;

  return (
    <>
      <p>Existen {cantidadPublicaciones} publicaciones:</p>
      <ListaPublicaciones publicaciones={publicaciones} />
    </>
  );
};
