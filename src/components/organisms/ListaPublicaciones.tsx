import React from "react";
import { Publicacion } from "../molecules/Publicacion";
import type { Post } from "../../types/Post";

interface ListaPublicacionesProps {
  publicaciones: Post[];
}

export const ListaPublicaciones: React.FC<ListaPublicacionesProps> = ({
  publicaciones,
}) => {
  return (
    <ul>
      {publicaciones.map((publicacion) => (
        <Publicacion key={publicacion.id} publicacion={publicacion} />
      ))}
    </ul>
  );
};
