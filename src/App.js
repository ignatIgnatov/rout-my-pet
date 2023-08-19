import {} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { AuthContext } from "./contexts/AuthContext";

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
  const [user, setUser] = useState({
    accessToken: "",
    email: "",
    _id: "", 
  });

  const login = (authData) => {
    setUser(authData);
  };

  const onLogout = () => {
    //TODO: to implement
  };

  return (
    <AuthContext.Provider value={{user, login}}>
      <div id="container">
        {/* {...user} съответства на id={user.id} accessToken={user.accessToke} email={user.email} */}
        <Header />

        <main id="site-content">
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/my-pets" element={<MyPets />} />
            <Route path="/details/:petId" element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
