// Script by Walkie_UA - StackOverflow

let language = window.navigator.language;
let languageFistTwo = language.substr(0, 2); // To only keep the first 2 characters
let currentLocation = document
  .getElementsByTagName("html")[0]
  .getAttribute("lang-js");

switch (languageFistTwo) {
  case "es":
    if (currentLocation == "es") window.location.href = "/index.html";
    break;

  default:
    if (currentLocation != "en") {
      window.location.href = "/en/index.html";
    }
}