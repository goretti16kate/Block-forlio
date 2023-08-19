import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  image,
  img,
  email,
  emailC,
  emailtext,
  socials,
  imageL,
  text,
  etext,
  textS,
  socialtext,
  socialC,
  imageS
} from "./contact.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Contact = () => {
  return (
    <div className={container}>
      <div className={img}>
        <StaticImage
          src="../images/contact.png"
          alt="A person on a desk, thinking"
          className={image}
        />
      </div>
      <div className={email}>
        <div className={emailC}>
          <p className={text}>Shoot me an email me at:</p>
          <div className={emailtext}>
            <StaticImage
              src="../images/email.png"
              alt="A person on a desk, thinking"
              className={imageL}
            />
            <p className={etext}>gorettikate@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={socials}>
      <div className={socialC}>
          <p className={textS}>Link and text me on LinkedIn 
or twitter</p>
          <div className={socialtext}>
            <StaticImage
              src="../images/LinkedIn.png"
              alt="A person on a desk, thinking"
              className={imageS}
            />
            {/* <p className={etext}>gorettikate@gmail.com</p> */}
            <StaticImage
              src="../images/Twitter.png"
              alt="A person on a desk, thinking"
              className={imageS}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
