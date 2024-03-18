import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className="NavBar">
        <div className="Content">
            <div className="logo">
                <img src="/image/logo.webp" alt="" />
            </div>
            <div className="links flex items-center ">
                <ul className="link flex gap-3">
                    <Link to="/">INICIO</Link>
                    <Link to="/Nosotros">NOSOTROS</Link>
                    <Link to="/Tours-en-Lima">TOURS EN LIMA</Link>
                    <Link to="/Contacto">CONTACTO</Link>
                </ul>
            </div>
            <div>
                <option value="">Idiomas</option>
            </div>
        </div>
    </div>
  );
};
