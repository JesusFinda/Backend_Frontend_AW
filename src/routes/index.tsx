import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Landpage } from "../pages/client/landpage";
import { LoginPage } from "../pages/auth/login";
import { RegisterPage } from "../pages/auth/register";
import { AdministratorMainPage } from "../pages/administrator";
import ClientHome from "../pages/client/home";
import ClientBooking from "../pages/client/book";
import AdministrativeManageInformationPage from "../pages/administrative/manage-info";
import AdministrativeManageBooking from "../pages/administrative/manage-booking";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Landpage />} path="/" />

      <Route path="/auth">
        <Route element={<LoginPage />} path="login" />
        <Route element={<RegisterPage />} path="cadastrar" />
      </Route>

      <Route path="/cliente">
        <Route element={<ClientHome />} path="" />
        <Route element={<ClientBooking />} path="agendar" />
      </Route>

      <Route path="/gerir">
        <Route element={<AdministrativeManageInformationPage />} path="geral" />
        <Route element={<AdministrativeManageBooking />} path="marcacoes" />
      </Route>

      <Route element={<AdministratorMainPage />} path="/administrador" />
    </Route>
  )
);
