import axios from "axios";
import type { Post, Comment, User } from "../types";

export async function traerDatos(): Promise<Post[]> {
  const publicaciones = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const comentarios = await axios.get<Comment[]>(
    "https://jsonplaceholder.typicode.com/comments"
  );

  const usuarios = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const posts = publicaciones.data.map((publicacion) => {
    const comentariosPublicacion = comentarios.data.filter((comentario) => {
      return comentario.postId === publicacion.id;
    });

    const usuario = usuarios.data.find((usuario) => {
      return usuario.id === publicacion.userId;
    });

    return { ...publicacion, usuario, comentarios: comentariosPublicacion };
  });

  return posts;
}
