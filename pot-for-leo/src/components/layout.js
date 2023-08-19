import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  navWrapper,
  navbar,
  navLinks1,
  navLinks,
  contact,
  navLinksItem,
  navLinksText,
  bulb,
  line,
  awesome,
  subContainer,
  input,
  footer,
  sub,
  news,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className={navWrapper}>
        <nav className={navbar}>
          <StaticImage
            className={bulb}
            alt="a turned-on light bulb"
            src="../images/lightBulb.png"
          />

          <ul className={navLinks1}>
            <li className={navLinksItem}>
              <Link to="/" className={navLinksText}>
                About
              </Link>
            </li>
            <li className={navLinksItem}>
              <Link to="/writeup" className={navLinksText}>
                Blog
              </Link>
            </li>
            <div className={line}></div>
          </ul>
          <ul className={navLinks}>
            <li className={navLinksItem}>
              <Link to="https://twitter.com" className={navLinksText}>
                Twitter
              </Link>
            </li>
            <li className={navLinksItem}>
              <Link to="https://linkedin.com" className={navLinksText}>
                LinkedIn
              </Link>
            </li>
            <li className={navLinksItem}>
              <Link to="https://github.com" className={navLinksText}>
                Github
              </Link>
            </li>
            <li className={navLinksItem}>
              <Link to="https://medium.com" className={navLinksText}>
                Medium
              </Link>
            </li>
            <li className={contact}>
              <Link to="https://medium.com" className={awesome}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <div className={subContainer}>
          <p className={news}>Subscribe to my newsletter</p>
          <div className={input}>
            <button className={sub}>Subscribe</button>
          </div>
        </div>
        {/* <div>
          <p>@2023 Made with lots of patience by k4713</p>
        </div> */}
        <p>@2023 Made with lots of patience by k4713</p>
      </footer>
    </div>
  );
};

export default Layout;
