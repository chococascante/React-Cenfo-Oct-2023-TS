import React from "react";
import type { Post } from "../../types/Post";

interface ListaPublicacionesProps {
  publicaciones: Post[];
}

export const ListaPublicaciones: React.FC<ListaPublicacionesProps> = ({
  publicaciones,
}) => {
  return (
    <ul>
      {publicaciones.map((publicacion) => {
        return (
          <li key={publicacion.id}>
            <p>{publicacion.usuario?.name}</p>
            <p>{publicacion.body}</p>

            <ul>
              {publicacion.comentarios?.map((comentario) => (
                <li key={comentario.id}>
                  <p>{comentario.name}</p>
                  <p>{comentario.body}</p>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
