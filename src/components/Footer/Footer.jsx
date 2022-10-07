import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faMedium,
  faSquareInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <ul className="footer__socialmedia">
            <li>
              <a
                href="https://www.linkedin.com/in/noelle-donkor/"
                className="footer__icons"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/noelledons"
                className="footer__icons"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://noelledons.medium.com/"
                className="footer__icons"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faMedium} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shelikestocode"
                className="footer__icons"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="footer__icons"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">
          <p> © Copyright 2022 | Designed &amp; Developed by Noelle Donkor </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
