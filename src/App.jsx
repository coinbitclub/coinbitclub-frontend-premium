import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PainelLayout from "./components/PainelLayout";
import Dashboard from "./pages/painel/Dashboard";

export default function App() {
  const isAuthenticated = true; // substituir por lógica real
  return (
    <Router>
      <Routes>
        <Route path="/painel" element={isAuthenticated ? <PainelLayout /> : <Navigate to="/login" />} >
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
