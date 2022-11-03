import Layout from "./components/Layout";
import { CarContextProvider } from "./contexts/carContext";
import Router from "./routes";

function App() {
  return (
    <Layout>
      <CarContextProvider>
        <Router />
      </CarContextProvider>
    </Layout>
  );
}

export default App;
