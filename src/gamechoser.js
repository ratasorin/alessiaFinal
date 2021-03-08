let input = document.querySelector(".name");
let button = document.querySelector(".button");

let promise = new Promise((resolve) => {
  button.addEventListener("click", () => {
    document.body.removeChild(input);
    document.body.removeChild(button);
    resolve(input.value);
  });
});
export { promise };
