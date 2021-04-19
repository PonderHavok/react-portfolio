import React from "react";
import "./Bio.css";
import meImg from "../components/images/me.jpg";
import JonnyPDF from "../components/images/Jonathen_Talbott_Resume.pdf";

function Bio() {
  return (
    <>
      <div class="main">
        <div class="container">
          <div class="row">
            <div class="col-sm-5 left-main">
              <div class="photo">
                <img class="propic" src={meImg} alt="" />
              </div>
            </div>

            <div class="col-sm-5 right-main">
              <h2>About Me</h2>
              <p>
                Working to turn my passion for technology into a career as a
                full stack web developer.
              </p>
              <p class="bold">
                Currently Specializing in UI/UX & Javascript and familiar with
                building full stack applications.
              </p>
              <p>
                Leveraging Butler University's bootcamp I am gaining the skills
                and knowledge needed to become an expert in my field!
              </p>
              <p class="bold">
                Skills & Languages learned include: ReactJS, Node.Js, Express,
                JavaScript, jQuery, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose,
                Handlebars, HTML5, CSS3, Bootstrap & React Bootstrap, Foundation
                CSS, APIs, Heroku, Terminal, Inquirer, AJAX, Axios, Multer,
                Restful API, ES6, JSON, Sequelize
              </p>
              <p>
                Please use the following links to find out more regarding my
                career history and a portfolio of projects completed via GitHub
              </p>
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
                href={JonnyPDF}
                download="Talbott-resume"
                class="btn btn-lg btn-outline-light"
              >
                Resume
              </a>
            </div>
          </div>
          <div class="row links">
            <div class="col-12 social-media"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;
