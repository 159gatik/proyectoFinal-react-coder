import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="d-flex justify-content-center fondo">
          <ul className="row mt-5 text-center">
            <h4>Contactános</h4>
            <li>
              <i className="fa-brands fa-whatsapp"></i> 2454521
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> pintobike@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} /> Calle 4 5454
            </li>
          </ul>
          <ul className="mt-5 text-center">
            <h4>Sigamos conectados</h4>
            <li>
              <i className="fa-brands fa-instagram"> pinto.bike</i>
            </li>
            <li>
              <i className="fa-brands fa-facebook-f"> pinto bike</i>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);
