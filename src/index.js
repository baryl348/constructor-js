import { templates } from "./action/function";
import { mass } from "./mass";
import "../src/styles/main.css";

const main = document.querySelector("#main");

mass.forEach((blocks) => {
  const toHTML = templates[blocks.type];
  if (toHTML) {
    main.insertAdjacentHTML("beforeend", toHTML(blocks));
  }
});
