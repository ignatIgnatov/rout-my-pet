import {} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import * as authService from "./services/authService";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
// import Edit from "./components/Edit/Edit";
import MyPets from "./components/MyPets/MyPets";
import Footer from "./components/Footer/Footer";
import Logout from "./components/Logout/Logout";

function App() {
  const [userInfo, setUserInfo] = useState({
    isAuthenticated: false,
    username: "",
  });

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    });
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username,
    });
  };

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: "",
    });
  }

  return (
    <div id="container">
      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/logout" element={<Logout onLogout={onLogout} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/details/:petId" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
