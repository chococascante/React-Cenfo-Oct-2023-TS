import React from "react";
import { ListaPublicaciones } from "../organisms/ListaPublicaciones";
import { traerDatos } from "../../services/JSONPlaceholder";
import type { Post } from "../../types/Post";

export const HomePage = () => {
  const [cargando, setCargando] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [publicaciones, setPublicaciones] = React.useState<Post[]>([]);

  const fetchDatos = async () => {
    try {
      const datos = await traerDatos();
      setPublicaciones(datos);
      setCargando(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  React.useEffect(() => {
    fetchDatos();
  }, []);

  if (error) return <p>Hubo un error al cargar los datos</p>;

  if (cargando) return <p>Cargando...</p>;

  return <ListaPublicaciones publicaciones={publicaciones} />;
};
