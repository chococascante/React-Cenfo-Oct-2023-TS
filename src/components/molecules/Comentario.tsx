import React from "react";
import { ListItem, Card, CardContent, Typography } from "@mui/material";
import type { Comment } from "../../types";

interface ComentarioProps {
  comentario: Comment;
}

export const Comentario: React.FC<ComentarioProps> = ({ comentario }) => {
  return (
    <ListItem>
      <Card>
        <CardContent>
          <Typography variant="caption">{comentario.name}</Typography>
          <Typography variant="body2">{comentario.body}</Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
};
