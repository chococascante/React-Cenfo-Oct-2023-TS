import React from "react";
import { UsersList } from "../organisms/UsersList";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingUsers, setUsers } from "../../store/reducers/userSlice";
import type { RootState } from "../../store/configureStore";

export const Users = () => {
  const loadingUsers = useSelector(
    (state: RootState) => state.user.loadingUsers
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersJSON = await response.json();

      dispatch(setUsers(usersJSON));
      dispatch(setLoadingUsers(false));
    }

    fetchUsers();
  }, [dispatch]);

  if (loadingUsers) return <div>Cargando...</div>;

  return <UsersList />;
};
