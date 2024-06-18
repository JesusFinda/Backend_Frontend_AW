import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Landpage } from "../pages/client/landpage";
import { LoginPage } from "../pages/auth/login";
import { RegisterPage } from "../pages/auth/register";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Landpage />} path="/" />

      <Route path="/auth">
        <Route element={<LoginPage />} path="login" />
        <Route element={<RegisterPage />} path="register" />
      </Route>
    </Route>
  )
);
