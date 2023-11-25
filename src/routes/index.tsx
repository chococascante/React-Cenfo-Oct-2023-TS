import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { HomePage } from "../components/pages/HomePage";
import { Users } from "../components/pages/Users";
import { Counter } from "../components/organisms/Counter";
import { ProfilePage } from "../components/pages/ProfilePage";

// Forma 1
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

// Forma 2
export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* /users !== /user/1 */}
        <Route path="/users/:userId" element={<ProfilePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
