import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Logo from "./Assets/Img/Logo.svg";
import { Barcha_kurs, Biz_haqimizda, Sotib_olingan_kurs } from "./components";
import "./Public.scss";

function Public() {
  return (
    <div>
      <header className="header">
        <section className="header__sec">
          <NavLink
            className={({ isActive }) => (isActive ? "logo" : "")}
            to="/"
          >
            <img src={Logo} width="219" height="85" />
          </NavLink>
          <nav className="navigation">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Sotib olingan kurslar
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/projects"
            >
              Barcha kurslar
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              Biz haqimizda
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active kirish" : "kirish")}
              to="/Kirsish"
            >
              Kirish
            </NavLink>
          </nav>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Sotib_olingan_kurs/>} />
        <Route path="/projects" element={<Barcha_kurs/>} />
        <Route path="/contact" element={<Biz_haqimizda/>} />
        <Route path="/Kirsish" element={"Kirish"} />
      </Routes>
    </div>
  );
}

export default Public;
