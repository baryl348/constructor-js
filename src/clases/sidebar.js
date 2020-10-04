import { block } from "../utils/utils";
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from "./class";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }
  init() {
    this.el.insertAdjacentHTML("afterbegin", this.template);
    this.el.addEventListener("submit", this.add.bind(this));
  }
  get template() {
    return [
      block("text"),
      block("title"),
      block("image"),
      block("columns"),
    ].join(" ");
  }

  add(e) {
    e.preventDefault();
    const type = e.target.name;
    const value = e.target.value.value;
    const styles = e.target.styles.value;
    let newBlock;
    if (type === "text") {
      newBlock = new TextBlock(value, { styles });
    } else if (type === "title") {
      newBlock = new TitleBlock(value, { styles });
    } else if (type === "image") {
      newBlock = new ImageBlock(value, { styles });
    } else if (type === "columns") {
      newBlock = new ColumnsBlock(value, { styles });
    }
    this.update(newBlock);
    e.target.value.value = "";
    e.target.styles.value = "";
  }
}
