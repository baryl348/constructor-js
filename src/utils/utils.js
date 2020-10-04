export function row(content, styles) {
  return `<div class='row' style ='${styles}'>${content}</div>`;
}
export function cols(content) {
  return `<div class='col-sm'>${content}</div>`;
}

export function css(styles = {}) {
  // старое решение
  // const keys = Object.keys(styles);
  // const array = keys.map((key) => {
  //   return `${key}: ${styles[key]}`;
  // });
  // return array.join(";");
  if (typeof styles === "string") return styles;
  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(";");
}

export function block(type) {
  return `<form name='${type}' >
        <h5>${type}</h5>
        <div class='form-group'>
            <input class='form-control form-control-sm' name='value' placeholder='value'></input>
        </div>
        <div class='form-group'>
        <input class='form-control form-control-sm' name='styles' placeholder='styles'></input>
        </div>
        <button type='submit' class='btn btn-primary btn-sm'>добавить</button>
    </form>
    <hr/>`;
}
