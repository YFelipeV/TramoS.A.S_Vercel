import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Header } from "../Components";
import Navbar from "../dashboard/Menus/Navbar";
import {
  Conductores,
  DatosCliente,
  DatosClienteEmpresa,
  DatosConductores,
  Historial,
  Login,
  Pagina404,
  Solicitudes,
  Pqrs,
} from "../Pages";

export const AppRouter = () => {
  return (
    <>
      {/* PUBLICAS*/}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactos" element={<Contact />} />
        </Route>
        <Route path="Login" element={<Login />} />
        {/* PRIVADAS*/}*
        <Route path="/dashboard" element={<Navbar />}>
          <Route index element={<Conductores />} />
          <Route path="solicitudes" element={<Solicitudes />} />
          <Route path="datosconductores" element={<DatosConductores />} />
          <Route path="datoscliente" element={<DatosCliente />} />
          <Route path="datosclienteEmpresa" element={<DatosClienteEmpresa />} />
          <Route path="historial" element={<Historial />} />
          <Route path="pqrs" element={<Pqrs />} />
        </Route>
        <Route path="/pagina404" element={<Pagina404 />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </>
  );
};

export default AppRouter;
