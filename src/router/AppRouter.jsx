import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

import ForgotPassword from "../components/pages/forgotPassword/ForgotPassword";
import Dashboard from "../components/pages/dashboard/Dashboard";
import ProtectedAdmin from "./ProtectedAdmin";
import { Layout } from "../components/layout/Layout";
import Login from "../components/pages/login/Login";
import { Home } from "../components/pages/home/Home";
import Register from "../components/pages/register/Register";
import { Miembros } from "../components/pages/miembros/Miembros";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* PARA LOS USUARIOS LOGEADOS */}
      {/* <Route element={<ProtectedUsers />}>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
      </Route> */}
      {/* Para todos los usuarios */}
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      {/* PARA LOS USUARIOS ADMIN */}
      <Route element={<ProtectedAdmin />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/miembros" element={<Miembros />} />
        </Route>
      </Route>
      {/* Login */}
      <Route path="/login" element={<Login />} />
      {/* register */}
      <Route path="/register" element={<Register />} />
      {/* forgot password  */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
