import { ServicesContextProvider } from "./Context/Context";
import AppRouter from "./Routes/AppRouter";

function App() {
  return (
    <>
      <ServicesContextProvider>
        <AppRouter />
      </ServicesContextProvider>
    </>
  );
}

export default App;
