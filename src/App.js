import {} from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import MyPets from "./components/MyPets/MyPets";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="container">
      <Header />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/my-pets" element={<MyPets />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
