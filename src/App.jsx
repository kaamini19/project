import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import AdminLogin from "./components/AdminLogin";

import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./components/AdminDashboard";
import Vyapari from "./components/Vyapari";
import Karigar from "./components/Karigar";
import Assign from "./components/Assign";
import Orders from "./components/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminLogin />} />

        {/* ADMIN PANEL ROUTES */}
        <Route path="/admin-panel" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="vyapari" element={<Vyapari />} />
          <Route path="karigar" element={<Karigar />} />
          <Route path="assign" element={<Assign />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


