import { Main } from "./main";
import { Sidebar } from "./sidebar";

export class App {
  constructor(mass) {
    this.mass = mass;
  }
  init() {
    const main = new Main("#main");
    main.render(this.mass);

    // mass.forEach((blocks) => {
    //   main.insertAdjacentHTML("beforeend", blocks.toHTML());
    // });

    const updateCallback = (newBlock) => {
      this.mass.push(newBlock);
      main.render(this.mass);
    };
    new Sidebar("#panel", updateCallback);
  }
}
