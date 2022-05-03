import { CotizadorProvider } from "./context/CotizadorProdvider";
import AppSeguro from "./components/AppSeguro";

function App() {
  return (
    <CotizadorProvider>
      <AppSeguro />;
    </CotizadorProvider>
  );
}

export default App;
