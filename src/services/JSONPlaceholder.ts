import type { Comment } from "../types/Comment";
import type { Post } from "../types/Post";
import type { User } from "../types/User";

export const traerDatos = async (
  setPublicaciones: (posts: Post[]) => void,
  setCargando: (cargando: boolean) => void
) => {
  const publicaciones = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const publicacionesJSON = await publicaciones.json();

  const comentarios = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const comentariosJSON = await comentarios.json();

  const usuarios = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuariosJSON = (await usuarios.json()) as User[];

  const posts = publicacionesJSON.map((publicacion: Post) => {
    const comentariosPublicacion = comentariosJSON.filter(
      (comentario: Comment) => {
        return comentario.postId === publicacion.id;
      }
    );

    const usuario = usuariosJSON.find((usuario) => {
      return usuario.id === publicacion.userId;
    });

    return { ...publicacion, usuario, comentarios: comentariosPublicacion };
  });

  setPublicaciones(posts);
  setCargando(false);
};
