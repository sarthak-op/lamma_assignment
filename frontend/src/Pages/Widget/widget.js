import React from "react";

import "./widget.css";
const Widget = () => {
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
          <li>
            <a href="/projects">Sample_Project</a>
          </li>
          <li>Widget_Configuration</li>
        </ul>
      </div>
      <div className="adjust">
        <header>
          <h1 className="title">Configuration</h1>
        </header>
        <div class="tabs">
          <button class="tab active" onclick="openTab(event, 'General')">
            General
          </button>
          <button class="tab" onclick="openTab(event, 'Display')">
            Display
          </button>
          <button class="tab" onclick="openTab(event, 'Advanced')">
            Advanced
          </button>
        </div>
        <div id="General" class="tab-content active">
          <label for="chatbot-name">Chatbot Name</label>
          <input
            className="widget-input"
            type="text"
            id="chatbot-name"
            placeholder="Lorem ipsum dolor sit Lorem ipsum dolor sit"
          />

          <label for="welcome-message">Welcome Message</label>
          <input
            className="widget-input"
            type="text"
            id="welcome-message"
            placeholder="Lorem ipsum dolor sit Lorem ipsum dolor sit"
          />

          <label for="input-placeholder">Input Placeholder</label>
          <input
            className="widget-input"
            type="text"
            id="input-placeholder"
            placeholder="Lorem ipsum dolor sit Lorem ipsum dolor sit"
          />
        </div>
        <div id="Display" class="tab-content"></div>
        <div id="Advanced" class="tab-content"></div>
      </div>
    </div>
  );
};

export default Widget;
