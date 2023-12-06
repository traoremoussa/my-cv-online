"use strict";


// Storing json data in a variable
const localJsonFile = "./datas/data.json";



window.addEventListener("DOMContentLoaded", () => {

    fetch("./datas/data.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            profileData(data.profile);
            experianceData(data.experiences);

        });
});


//profile
function profileData(pd) {
    const profileData = document.querySelector(".id-profile");
    profileData.textContent = pd;

}
function contactData(cd) {
    //Contact
    const contactData = document.querySelector(".id-contact");
    console.info("conatact -->:" + contactData.childNodes[0].nodeValue);
    const array = Array.from(contactData.children)
    array.forEach(el => {
        /* do whatever you want */

    })
}

//experiance

function experianceData(ed) {
    const experData = document.querySelector("#id-exper");
    ed.forEach((el) => {
        experData.append(alimentexperience(el))
    });
}

function alimentexperience(el) {
    const div = document.createElement("div");
    div.classList.add('box');

    div.innerHTML =
        `<div class="year_company">
           <h5>${el.period}</h5>
           <h5>${el.company}</h5>
          </div>
  <div class="text">
    <h4>${el.title}</h4>
    <p>
     ${el.missions}
    </p>
    <i>technos:</i>
                <span> ${el.technologies}</span>
  </div>`
    return div;
}

