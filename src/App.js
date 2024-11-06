import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AddNote from "./Components/AddNote";
import EditNote from "./Components/EditNote";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/edit" element={<EditNote />} />
      </Routes>
    </div>
  );
}

export default App;
