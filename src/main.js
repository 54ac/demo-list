import "./style.css";

const user = "me";
const domain = "54ac.ovh";

const meA = document.createElement("a");

meA.href = "mailto:" + user + "@" + domain;
meA.textContent = "54ac";

document.getElementById("me").appendChild(meA);
