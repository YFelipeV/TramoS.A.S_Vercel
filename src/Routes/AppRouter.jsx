import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Header } from "../Components";
import Navbar from "../dashboard/Menus/Navbar";
import Manifiesto from "../dashboard/Modales/Manifiesto";
import { PDFViewer } from "@react-pdf/renderer";
import { lazy, Suspense } from "react";
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
const Head = lazy(() => import("../Components/Header"));
export const AppRouter = () => {
  return (
    <>
      {/* PUBLICAS*/}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h4>cargando...</h4>}>
              <Head />
            </Suspense>
          }
        >
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
        <Route
          path="/manifiesto"
          element={
            <PDFViewer
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "dark",
              }}
            >
              <Manifiesto />
            </PDFViewer>
          }
        />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </>
  );
};

export default AppRouter;
