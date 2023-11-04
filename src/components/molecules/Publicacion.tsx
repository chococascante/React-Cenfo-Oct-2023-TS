import React from "react";
import { ListaComentarios } from "../organisms/ListaComentarios";
import { ListItem, Card, CardContent, Typography } from "@mui/material";
import type { Post } from "../../types/Post";

interface PublicacionProps {
  publicacion: Post;
}

export const Publicacion: React.FC<PublicacionProps> = ({ publicacion }) => {
  return (
    <ListItem>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">{publicacion.usuario?.name}</Typography>
          <Typography variant="body1">{publicacion.body}</Typography>

          {publicacion.comentarios && (
            <ListaComentarios comentarios={publicacion.comentarios} />
          )}
        </CardContent>
      </Card>
    </ListItem>
  );
};
