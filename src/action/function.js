import { cols, row } from "../utils/utils";

export const templates = {
  title,
  text,
  columns,
  image,
};

function title(blocks) {
  const { tag, styles } = blocks.options;
  return row(cols(`<${tag}>${blocks.value}</${tag}>`), styles);
}

function text(blocks) {
  return row(cols(`<p>${blocks.value}</p>`));
}

function columns(blocks) {
  const html = blocks.value.map((item) => cols(item));
  return row(html.join(" "));
}

function image(blocks) {
  return row(`<img src='${blocks.value}' />`);
}
