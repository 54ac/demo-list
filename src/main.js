import "./main.css";
import projects from "./projects.json";

const projectsDiv = document.querySelector("#projects");

const me = document.querySelector("#me");

for (const p of projects.sort((a, b) =>
	a.name.replace("the", "").localeCompare(b.name.replace("the", ""))
)) {
	const pA = document.createElement("a");
	pA.classList.add("mainLink");
	const pMainP = document.createElement("p");
	pMainP.classList.add("mainP");
	const pSecP = document.createElement("p");
	pSecP.classList.add("secP");

	pA.target = "_blank";
	pA.rel = "noopener noreferer";
	if (p.demo) pA.href = "https://rowrawer.cf:" + p.port;
	else pA.href = p.url;

	pMainP.textContent = p.name;
	pSecP.textContent = p.description;

	pA.appendChild(pMainP);
	pA.appendChild(pSecP);
	projectsDiv.appendChild(pA);
}

const meA = document.createElement("a");
const user = "rowrawer";
const domain = "gmail.com";
meA.href = "mailto:" + user + "@" + domain;
meA.textContent = user;
me.appendChild(meA);
