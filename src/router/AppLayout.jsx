import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
