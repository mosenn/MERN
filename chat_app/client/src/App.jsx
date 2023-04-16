import "./App.css";
import { Register } from "./pages/Register";
import { useGlobalcontext } from "./Context/Context";
function App() {
  const { name } = useGlobalcontext();
  return (
    <div className="bg-red">
      <h1 className="text-lg bg-blue-400">{name}</h1>
      <Register />
    </div>
  );
}

export default App;
