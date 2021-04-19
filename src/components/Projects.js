import React from "react";
import "./Projects.css";
import PGImg from "./images/passgen.png";
import employeeImg from "./images/Employ.png";
import ghImg from "./images/GH.png";
import weatherImg from "./images/weather.png";
import R4MImg from "./images/R4M.png";
import workImg from "./images/WorkDay.png";

function Projects() {
  return (
    <>
      <div class="portfolio-background">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <header class="content-header" style={{ height: `20%` }}>
                <h2>Portfolio - *click image to view deployed project</h2>
              </header>
            </div>
          </div>
          <div class="row projects">
            <div class="col-sm">
              <h4>GameHaven</h4>
              <a
                href="https://github.com/PonderHavok/gaming-dashboard"
                target="GameHaven Repo"
              >
                Click here to view code
              </a>
              <a
                href="https://gaming-dashboard.herokuapp.com/"
                target="GameHaven"
              >
                <img src={ghImg} alt="test" class="img-thumbnail" />
              </a>
              <ul class="info">
                <li>
                  Still under early developement, We aim to be a one stop shop
                  for all things game.
                </li>
                <li>
                  Streaming Features, Chat, Game Reviews, Live Gaming Event
                  Coverage, and Connectivity from Developer to Gamer.
                </li>
              </ul>
            </div>
            <div class="col-sm">
              <h4>Node Based Employee Tracker</h4>
              <a
                href="https://github.com/PonderHavok/track-employees"
                target="Employee Repo"
              >
                Click here to view code
              </a>
              <a
                href="https://drive.google.com/file/d/1CIfQ791ROjsSD3CNj8iphOueGJOLviGD/view"
                target="EmployeeTracker"
              >
                <img src={employeeImg} alt="test" class="img-thumbnail" />
              </a>
              <ul class="info">
                <li>
                  Employee Tracker uses Node to create an employee database as
                  well as add or delete roles
                </li>
                <li>
                  This tracker uses SQL on the backend to store and access the
                  data
                </li>
                <li>
                  View table of employees and roles directly in the terminal
                </li>
              </ul>
            </div>
            <div class="col-sm">
              <h4>Random Password Generator</h4>
              <a
                href="https://github.com/PonderHavok/genpassapp"
                target="passGen Repo"
              >
                Click here to view code
              </a>
              <a
                href="https://ponderhavok.github.io/genpassapp/"
                target="Password Generator"
              >
                <img src={PGImg} alt="test" class="img-thumbnail" />
              </a>
              <ul class="info">
                <li>
                  This Javascript Password Generator was created for the
                  convenience and easy for anyone looking to create a new
                  password, that will not only last awhile but will also be
                  tough as nails to hack.
                </li>
                <li>
                  Simply Input the details you need qualified. Ok means Yes and
                  Cancel means No. You'll have your new Password in seconds.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div class="row projects">
            <div class="col-sm">
              <h4>5-Day weather Forecast App</h4>
              <a
                href="https://github.com/PonderHavok/howstheweather"
                target="Weather App Repo"
              >
                Click here to view code
              </a>
              <a
                href="https://ponderhavok.github.io/howstheweather/"
                target="Weather App"
              >
                <img src={weatherImg} alt="test" class="img-thumbnail" />
              </a>
              <ul class="info">
                <li>
                  This Weather Forecast Site was created to give you a simple
                  weather report.
                </li>
                <li>
                  Enter a Location. Toggle between your Entries. Read the 5 Day
                  Forecast to see what it will be like for the next 5 days.
                </li>
              </ul>
            </div>
            <div class="col-sm">
              <h4>Recipes4Me</h4>
              <a
                href="https://github.com/PonderHavok/recipes4me"
                target="Recipes4Me Repo"
              >
                Click here to view code
              </a>
              <a
                href="https://sfunk11.github.io/recipes4me/"
                target="Recipes4Me"
              >
                <img src={R4MImg} alt="test" class="img-thumbnail" />
              </a>
              <ul class="info">
                <li>
                  Recipes4me is your own personal cookbook. You can use the
                  recipe search feature to find recipes you will like, and save
                  them to your cookbook.
                </li>
                <li>
                  You can even dare to look for a random page of recipes to try
                  out! But, that's not all...you can also enter in the link to
                  recipes you already love and they will be saved to your
                  cookbook.
                </li>
              </ul>
            </div>
            <div class="col-sm">
              <h4>Daily Work Scheduler</h4>
              <a
                href="https://github.com/PonderHavok/dailyworksched"
                target="Work Scheduler repo"
              >
                Click here to view code
              </a>
              <a
                href="https://ponderhavok.github.io/dailyworksched/"
                target="Work Scheduler"
              >
                <img src={workImg} alt="test" class="img-thumbnail" />
              </a>
              <ul class="info">
                <li>
                  This Daily Work Schedule is a simple and basic application
                  designed to aid in keeping your employees work schedule easy
                  to understand and organized.
                </li>
                <li>
                  It updates automatically through out the day between the
                  working hours of 9 a.m to 5 p.m.
                </li>
                <li>
                  Simply type in the information you want stored and click on
                  the save Icon to the right. Simple.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
