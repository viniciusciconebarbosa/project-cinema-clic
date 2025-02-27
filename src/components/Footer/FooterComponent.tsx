import React, { FC } from "react";
import styles from "./style.module.css"; // Importar o módulo CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const FooterComponent: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>Empresa</h4>
            <ul className={styles.footerList}>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Suporte</h4>
            <ul className={styles.footerList}>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Loja</h4>
            <ul className={styles.footerList}>
              <li>
                <a href="#">watch</a>
              </li>
              <li>
                <a href="#">bag</a>
              </li>
              <li>
                <a href="#">shoes</a>
              </li>
              <li>
                <a href="#">dress</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Siga-nos</h4>
            <div className={styles.socialLinks}>
              <ul className={styles.footerList}>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
