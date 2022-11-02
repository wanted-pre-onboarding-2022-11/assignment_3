import { CarInfoProvider } from "./contest/CarProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <CarInfoProvider>
      <AppRouter />
    </CarInfoProvider>
  );
}

export default App;
