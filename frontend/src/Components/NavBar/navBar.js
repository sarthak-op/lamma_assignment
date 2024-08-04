import React from "react";
import "./navBar.css";

function Navbar() {
  return (
    <section class="create-project-screen">
      <div class="content-wrapper">
        <header class="header-container">
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
              <a href="/" class="back-button">
                <img
                  src="https://ucarecdn.com/4ec162df-04ba-4680-a934-15186ab74506/home.svg"
                  alt=""
                  class="back-icon"
                />
                <span class="back-text">Back to Home</span>
              </a>
            </div>
          </div>
          <div class="main-content-column">
            <div class="main-content-wrapper">
              <div class="icon-container">
                <a href="/setting">
                  <img
                    src="https://ucarecdn.com/b0e53f3f-fd28-4139-b4be-5b52e56b0a09/Icon.svg"
                    alt=""
                    class="icon-1"
                  />
                </a>
                <a href="/">
                  <img
                    src="https://ucarecdn.com/6088d3ec-048a-4c3b-ab60-76a08723959f/notifications.svg"
                    alt=""
                    class="icon-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
export default Navbar;
