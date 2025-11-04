import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import './assets/css/style.css';

const App: React.FC = () => {
  return (
    <Router>
    <div className="d-flex flex-column min-vh-100">
    <Header />
    <main className="flex-grow-1">
      <AppRoutes />
    </main>
    <Footer />
  </div>
  </Router>
  );
};

export default App;