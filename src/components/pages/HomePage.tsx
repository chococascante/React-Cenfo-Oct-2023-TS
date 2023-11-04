import React from "react";
import { ListaPublicaciones } from "../organisms/ListaPublicaciones";
import type { User } from "../../types/User";
import type { Post } from "../../types/Post";
import type { Comment } from "../../types/Comment";
import { traerDatos } from "../../services/JSONPlaceholder";

export const HomePage = () => {
  const [cargando, setCargando] = React.useState(true);
  const [publicaciones, setPublicaciones] = React.useState<Post[]>([]);

  React.useEffect(() => {
    traerDatos(setPublicaciones, setCargando);
  }, []);

  return <ListaPublicaciones publicaciones={publicaciones} />;
};
