import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./components/HomePage";
import MoviesPage from "./components/MoviesPage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import EventsPage from "./components/EventsPage";
import SportsPage from "./components/SportsPage";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/sports" element={<SportsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;