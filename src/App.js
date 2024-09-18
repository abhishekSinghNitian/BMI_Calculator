import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./components/Form";
function App() {
  return (
    <div className=" w-[300px] h-[330px] border-solid border-2 border-black-400 rounded-md  shadow-lg shadow-cyan-500/50 flex flex-col items-center drop-shadow-md hover:drop-shadow-xl">
      <Form />
    </div>
  );
}

export default App;
