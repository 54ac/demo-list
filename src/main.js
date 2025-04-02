import "./style.css";

const user = "me";
const domain = "54ac.ovh";

const meA = document.querySelector("#me a");

meA.href = "mailto:" + user + "@" + domain;
