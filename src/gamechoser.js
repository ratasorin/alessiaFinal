import "./style.scss";
const buttonOne = document.createElement("button");
buttonOne.classList.add("optionOne");
buttonOne.innerHTML = "Option One";
document.body.appendChild(buttonOne);
const buttonTwo = document.createElement("button");
buttonTwo.classList.add("optionTwo");
buttonTwo.innerHTML = "Option Two";
document.body.appendChild(buttonTwo);
const promiseOne = new Promise((resolve) => {
  buttonOne.addEventListener("click", (e) => {
    resolve(e.target);
  });
});
const promiseTwo = new Promise((resolve) => {
  buttonTwo.addEventListener("click", (e) => {
    resolve(e.target);
  });
});

const promise = Promise.race([promiseOne, promiseTwo]);
export { promise };