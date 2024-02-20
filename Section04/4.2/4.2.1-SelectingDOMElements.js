// select all unordered list (ul) elements

const ulByTag = document.getElementsByTagName("ul");
const ulQuery = document.querySelectorAll("ul");

console.log("element by tag", ulByTag);
console.log("query select all", ulQuery);

// select all elements with the class "class-week"

const classWeek = document.getElementsByClassName("class-week");
document.querySelectorAll(".class-week");

console.log("class week elements", classWeek);

// select all elements with the class "nav-bar"

const navBar = document.getElementsByClassName("nav-bar");

console.log("nav bar", navBar);

// select the element with the id "dog-picture" and save it to a variable

const dogPic = document.getElementById("dog-picture");

console.log("dog picture", dogPic);
