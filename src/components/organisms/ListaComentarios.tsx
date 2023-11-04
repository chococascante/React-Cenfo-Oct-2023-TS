import React from "react";
import { Comentario } from "../molecules/Comentario";
import type { Comment } from "../../types";

interface ListaComentariosProps {
  comentarios: Comment[];
}

export const ListaComentarios: React.FC<ListaComentariosProps> = ({
  comentarios,
}) => {
  return (
    <ul>
      {comentarios?.map((comentario) => (
        <Comentario key={comentario.id} comentario={comentario} />
      ))}
    </ul>
  );
};
