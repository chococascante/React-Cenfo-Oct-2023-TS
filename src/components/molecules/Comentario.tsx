import React from "react";
import type { Comment } from "../../types";

interface ComentarioProps {
  comentario: Comment;
}

export const Comentario: React.FC<ComentarioProps> = ({ comentario }) => {
  return (
    <li>
      <p>{comentario.name}</p>
      <p>{comentario.body}</p>
    </li>
  );
};
