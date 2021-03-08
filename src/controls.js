class Input {
  constructor(key) {
    this.key = key;
    this.active = false;
    this.pressed = false;
    this.lastPressed = false;
    this.disabled = false;
  }
  changeInput(pressed) {
    if (this.pressed != pressed) {
      this.pressed = this.active = pressed;
    }
  }
  getKey() {
    return this.key;
  }
}
const left = new Input("Left");
const right = new Input("Right");
const up = new Input("Up");
const down = new Input("Down");

function keyUpDown(e) {
  e.preventDefault();
  let state = e.type == "keydown";
  if (e.keyCode === 37) {
    left.changeInput(state);
  }
  if (e.keyCode === 38) {
    up.changeInput(state);
  }
  if (e.keyCode === 39) {
    right.changeInput(state);
  }
  if (e.keyCode === 40) {
    down.changeInput(state);
  }
}

function activate(window) {
  console.log("im in 🛑");
  window.addEventListener("keydown", keyUpDown);
  window.addEventListener("keyup", keyUpDown);
}

export { activate, left, right, up, down };
