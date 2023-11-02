const Comment = require("./components/reviewComponent.js");

const comment1 = new Comment("John", "This is a great article!");
const comment2 = new Comment("Jane", "Thanks for sharing your insights.");

console.log("hello");

const targetElement = document.getElementById("comments");

targetElement.appendChild(comment1.render());
targetElement.appendChild(comment2.render());