import { cols, css, row } from "../utils/utils";
class Block {
  constructor(value, options) {
    (this.options = options), (this.value = value);
  }
  toHTML() {
    throw new Error("метод toHTML должен быть использован");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag, styles } = this.options;
    return row(cols(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    return row(cols(`<p>${this.value}</p>`), css(this.options.styles));
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const html = this.value.map((item) => cols(item));
    return row(html.join(" "), css(this.options.styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles, imageStyles, alt } = this.options;
    return row(
      `<img src='${this.value}' alt='${alt}', imageStyles='${css(
        imageStyles
      )}' />`,
      css(styles)
    );
  }
}
