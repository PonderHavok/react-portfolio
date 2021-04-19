import React from "react";
import "./Contact.css";
import JonnyPDF from '../components/images/Jonathen_Talbott_Resume.pdf';
import contact from '../components/images/contact.jpg';

function ContactInfo() {
  return (
    <>
      <div class="main">
        <div class="container">
          <div class="row">
            <div class="col-sm-5 left-main">
              <div class="photo">
                <img class="propic" src={contact} alt=""/>
              </div>
            </div>

            <div class="col-sm-5 contact-right-main">
              <h2>Contact Jonathen Talbott</h2>
              <br />

              <p>
                &#8594; via e-mail:{" "}
                <a href="mailto: transverseponderer@gmail.com">
                  transverseponderer@gmail.com
                </a>
              </p>
              <p>
                &#8594; via phone: <a href="tel: 8124307635">812.430.7635</a>
              </p>
              <p>
                &#8594; view my work experience and GitHub repo to see some of
                my project examples using the links below:
              </p>
              <br />
              <a
                class="btn btn-lg btn-outline-light"
                href="https://www.linkedin.com/in/jonathen-talbott-a999ab1b0/"
                target="-blank"
                role="button"
              >
                LinkedIn
              </a>
              <a
                class="btn btn-lg btn-outline-light"
                href="https://github.com/PonderHavok"
                target="-blank"
                role="button"
              >
                GitHub
              </a>
              <a 
              href={JonnyPDF}download="Talbott-resume" 
              class="btn btn-lg btn-outline-light"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div class="row links">
          <div class="col-12 social-media"></div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
