/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import Dropdown from "./Dropdown.jsx";
import { Link } from "react-router-dom";
const Secciones = () => {
  const ListCategory = ["bicicletas", "indumentaria", "accesorios"];
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link active" to="/">
          {" "}
          inicio
        </Link>
      </li>
      <Dropdown lista={ListCategory}></Dropdown>
      <li className="nav-item"></li>
      <li className="nav-item">
        <Link className="nav-link active" to="/about">
          ayuda
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/form">
          contacto{" "}
        </Link>
      </li>
    </>
  );
};

export default memo(Secciones);
