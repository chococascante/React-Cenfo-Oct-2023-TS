import React from "react";
import { useParams } from "react-router-dom";

export const ProfilePage = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>{userId}</h1>
    </div>
  );
};
