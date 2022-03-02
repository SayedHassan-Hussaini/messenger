import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//
import Login from "./pages/login";
import Chat from "./pages/chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
