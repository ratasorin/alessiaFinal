import { gameStarter } from "./game";
import "./style.scss";
import Rectangle from "./rectangle";
import { FRAME_DURATION } from "./constants";

let newRect = new Rectangle(0, 0, 100, 100);

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

//for the game loop
let prev = 0;
let accumulatedProgress = 0;

// setting the dimensions
let [worldWidth, worldHeight] = [window.innerWidth, window.innerHeight];
[canvas.width, canvas.height] = [worldWidth, worldHeight];

gameStarter.then((value) => {
  /**
   * The **frame** function runs the game at a constant
   * frame rate
   *
   * @param {number} timestamp Is a long integer value,
   * the request id, that uniquely identifies the entry in the
   * callback list.
   */
  let frame = (timestamp) => {
    let progress = (timestamp - prev) / FRAME_DURATION;

    prev = timestamp;

    // this is the tick
    accumulatedProgress += progress;

    // resetting the tick to 1
    // so we can update the game once
    if (accumulatedProgress > 1) accumulatedProgress = 1;
    if (Math.abs(1 - accumulatedProgress) < 0.1) {
      // updating the game
      value.update(newRect);

      // resetting the tick to zero
      accumulatedProgress = 0;
    }

    // rendering the elements on the canvas
    value.render(ctx, newRect, worldWidth, worldHeight);

    requestAnimationFrame(frame);
  };

  // making the canvas visible at gameStart
  canvas.classList.remove("beforeGame");

  // initalizing the engine loop
  requestAnimationFrame(frame);
});
