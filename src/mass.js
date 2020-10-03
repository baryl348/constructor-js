import image from "../src/img/images.png";

export const mass = [
  {
    type: "title",
    value: " Конструктор сайтов на JS",
    options: {
      tag: "h2",
      styles: {
        background: "linear-gradient(to right, #ff0099, #493240)",
        color: " #fff",
        padding: " 1.5rem",
        "text-align": "center",
      },
    },
  },
  { type: "text", value: "here text" },
  {
    type: "columns",
    value: ["1st columns", "2st columns", "3st columns", "4st columns"],
  },
  { type: "image", value: ` ${image}` },
];
