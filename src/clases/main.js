export class Main {
  constructor(selector) {
    this.el = document.querySelector(selector);
  }
  render(mass) {
    this.el.innerHTML = "";
    mass.forEach((blocks) => {
      this.el.insertAdjacentHTML("beforeend", blocks.toHTML());
    });
  }
}
