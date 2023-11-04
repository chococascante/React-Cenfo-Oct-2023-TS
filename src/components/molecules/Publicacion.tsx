import React from "react";
import { ListaComentarios } from "../organisms/ListaComentarios";
import type { Post } from "../../types/Post";

interface PublicacionProps {
  publicacion: Post;
}

export const Publicacion: React.FC<PublicacionProps> = ({ publicacion }) => {
  return (
    <li>
      <p>{publicacion.usuario?.name}</p>
      <p>{publicacion.body}</p>

      {publicacion.comentarios && (
        <ListaComentarios comentarios={publicacion.comentarios} />
      )}
    </li>
  );
};
