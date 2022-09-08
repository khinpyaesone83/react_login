import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Admin from "./components/Admin";
import { useState } from "react";
import UserContext from "./components/userContext";

function App() {
  const [user, setUser] = useState("");

  const handleLogin = (values) => {
    localStorage.setItem("username", values.username);
    setUser(values.username);
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, handleLogin }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
