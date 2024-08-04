// ProjectDetails.js
import React from "react";

import "./setting.css";
const Setting = () => {
  return (
    <div>
      <div class="sidebar">
        <div class="logo-column">
          <div class="logo-wrapper">
            <a className="noUnderline" href="/">
              <div class="logo-container">
                <img
                  src="https://ucarecdn.com/41972c6e-2095-4fdc-8a1c-0bd2e0493e74/favicon.svg"
                  alt="LAMA Logo"
                  class="logo-image"
                />
                <h1 class="logo-text">LAMA.</h1>
              </div>
            </a>
          </div>
        </div>
        <ul className="list">
          <>Podcast Upload Flow</>
          <a className="noUnderline" href="/projects">
            <li>1. Projects</li>
          </a>
          <a className="noUnderline" href="/widget">
            <li>2. Widget Configurations</li>
          </a>
        </ul>
      </div>

      <div class="main-content">
        <ul class="breadcrumbs">
          <li>
            <a href="/">
              <img
                src="https://ucarecdn.com/4ec162df-04ba-4680-a934-15186ab74506/home.svg"
                alt=""
              />
            </a>
          </li>

          <li>Setting</li>
        </ul>
      </div>
      <div className="adjust">
        <header>
          <h1 className="title">Configuration</h1>
        </header>
      </div>
      <div class="profile">
        <img
          src="https://ucarecdn.com/f5e9ea43-fe00-49f7-a8fa-e166480ef997/Ellipse21.png"
          className="profile-pic"
          alt=""
        />
      </div>
      <div class="setting-input">
        <label for="username">User Name</label>
        <input type="text" id="username" value="alphauser" readonly />
      </div>
      <div class="setting-input">
        <label for="email">Email</label>
        <input type="email" id="email" value="alphauser@gmail.com" readonly />
      </div>
    </div>
  );
};

export default Setting;
