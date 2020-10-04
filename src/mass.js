import image from "../src/img/images.png";
import {
  ColumnsBlock,
  ImageBlock,
  TextBlock,
  TitleBlock,
} from "./clases/class";

export const mass = [
  new TitleBlock(" Конструктор сайтов на JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: " #fff",
      padding: " 1.5rem",
      "text-align": "center",
    },
  }),
  // старая запись
  // {
  //   type: "title",
  //   value: " Конструктор сайтов на JS",
  //   options: {
  //     tag: "h2",
  //     styles: {
  //       background: "linear-gradient(to right, #ff0099, #493240)",
  //       color: " #fff",
  //       padding: " 1.5rem",
  //       "text-align": "center",
  //     },
  //   },
  // },
  new TextBlock(" here text", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
  // {
  //   type: "text",
  //   value: "here text",
  //   options: {
  //     styles: {
  //       background: "linear-gradient(to left, #f2994a, #f2c94c)",
  //       padding: "1rem",
  //       "font-weight": "bold",
  //     },
  //   },
  // },
  new ColumnsBlock(
    ["1st columns", "2st columns", "3st columns", "4st columns"],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  // {
  //   type: "columns",
  //   value: ["1st columns", "2st columns", "3st columns", "4st columns"],
  //   options: {
  //     styles: {
  //       background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
  //       padding: "2rem",
  //       color: "#fff",
  //       "font-weight": "bold",
  //     },
  //   },
  // },
  new ImageBlock(` ${image}`, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: { width: "500px", height: "auto" },
    alt: "IMG",
  }),
  // {
  //   type: "image",
  //   value: ` ${image}`,
  //   options: {
  //     styles: {
  //       padding: "2rem 0",
  //       display: "flex",
  //       "justify-content": "center",
  //     },
  //     imageStyles: { width: "500px", height: "auto" },
  //     alt: "IMG",
  //   },
  // },
];
