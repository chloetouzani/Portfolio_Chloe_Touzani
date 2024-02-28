"use strict";

// ******************** CONSTANTS ********************
const reponse = await fetch("./projects.json");
const projects = await reponse.json();

// ******************** VARIABLES ********************
let isOpen = true;
// ******************** FUNCTIONS ********************
function createProjects(projects) {
  for (let i = 0; i < projects.length; i++) {
    const projectsGallery     = document.querySelector(".gallery");
    const section             = document.createElement("section");
    const figure              = document.createElement("figure");
    const img                 = document.createElement("img");
    const figcaption          = document.createElement("figcaption");
    const h3                  = document.createElement("h3");
    const p                   = document.createElement("p");

    const div                 = document.createElement("div");

    div.classList.add("close");

    section.id            = projects[i].name;
    img.src               = projects[i].image;
    img.alt               = projects[i].name;
    figcaption.innerText  = projects[i].name;
    h3.innerText          = projects[i].name;
    p.innerText           = projects[i].description;

    projectsGallery.appendChild(section);
    section.appendChild(figure);
    section.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(projectList(projects, i));
    div.appendChild(createProjectButtons(projects, i));
    figure.appendChild(img);
    figure.appendChild(figcaption);
  }
}

function createProjectButtons(projects, i) {
  const buttonDiv           = document.createElement("div");
  const webSite             = document.createElement("a");
  const code                = document.createElement("a");

  buttonDiv.classList.add("buttons");

  webSite.innerText         = "Visiter le site web";
  webSite.href              = projects[i].url;
  code.innerText            = "Voir le code";
  code.href                 = projects[i].codeUrl;

  if (projects[i].url !== null) {
    buttonDiv.appendChild(webSite);
  }

  buttonDiv.appendChild(code);
  return buttonDiv
}

function projectList(projects, i) {
    const ul                  = document.createElement("ul");
    
    for (let j = 0; j < projects[i].technologies.length; j++) {
      const li                  = document.createElement("li");
      li.innerText              = projects[i].technologies[j];
      ul.appendChild(li);
    }
    return ul
  }

function displayProjectDetails() {
  const projectsGallery = document.querySelectorAll('figcaption');
  projectsGallery.forEach((figcaption) => {
    figcaption.addEventListener("click", (event) => {
      event.preventDefault();

      const section = figcaption.closest("section");
      const divAnimation = section.querySelector("div");

      section.classList.toggle("open-section");
      divAnimation.classList.toggle("open");
      divAnimation.classList.toggle("close");
    });
  });
}

function sendMail() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name    = document.querySelector("#name").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;
    const mailto  = `mailto:chloe.touzani11@gmail.com?subject=${subject}&body=Bonjour ${name},%0D%0A%0D%0A${message}`;
    window.location.href = mailto;
  });}

// ******************** MAIN *************************
createProjects(projects);
displayProjectDetails();
sendMail();
