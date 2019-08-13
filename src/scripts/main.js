import data from "./data.js";
import factory from "./factory.js";

const employeeContainer = document.querySelector(".employee__container");

data.getEmployees().then(parsedEmployees => {
    console.log(parsedEmployees);
    parsedEmployees.forEach(employee => {
        const HTMLRep = factory.createHTML(employee);
        factory.addToDOM(employeeContainer, HTMLRep);
    });
});





