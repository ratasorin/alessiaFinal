import { promise } from "./gamechoser";
import { OFFSET_X, OFFSET_Y } from "./constants";
/**
 * **defaultProps** contains the default values for instantiating
 * a new game
 */
const defaultProps = {
  /**
   *  **playerWeapons** 🏹 ⚔  contains all the available weapons for
   *  the player
   * @type { string[] }
   */
  playerWeapons: ["bow", "sword"],

  /**
   * **playerHealth** is the initial health of the player
   * @type { number }
   */
  playerHealth: 100,

  /**
   * **bossHealth** is the initial health of the boss
   * @type { number }
   */
  bossHealth: 200,
};

/**
 * **overrides** contains all the proprieties that will be
 * overwritten
 */
const overrides = {
  /**
   * **name** will be the player's name of choice
   * @type { string }
   * @default value : "ⁿᵒ ⁿᵃᵐᵉ ᵇᵃᵇʸ"
   */
  name: "ⁿᵒ ⁿᵃᵐᵉ ᵇᵃᵇʸ",
};

export default class Game {
  constructor(options) {
    this.options = options;
  }
  showProps() {
    console.log(this.options);
  }
  /**
   * The **update** function is responsible for the game logic
   * @param { object } newRect Is the rectangle class instance
   * that will be animated
   */
  update(newRect) {
    newRect.moveDown();
    newRect.moveRight();
  }
  /**
   * The **render** function is responsible fo displaying
   * changes made by the update function
   * @param {<HTMLElementCanvas>} ctx Is the **canvas** context
   * that we are drawing on
   * @param { object } newRect Is the rectangle class instance
   * that will be animated
   * @param {number} worldWidth
   * @param {number} worldHeight
   */
  render(ctx, newRect, worldWidth, worldHeight) {
    // drawing the background
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, worldWidth, worldHeight);

    // drawing the rectangle
    ctx.fillStyle = "black";
    ctx.fillRect(newRect.getX(), newRect.getY(), 100, 100);

    // displaying the text, on the top of the player
    // using the X and Y OFFSETS
    ctx.fillText(
      `${this.options.name}`,
      newRect.getX() + OFFSET_X,
      newRect.getY() + OFFSET_Y
    );
  }
}

/**
 * **gameStarter** is instantiating a new Game class when
 *  a promise has been resolved
 * @returns {Promise<void>} When the object has been instantiated
 *
 */
let gameStarter = promise.then((response) => {
  // checking if the response from the input box isn't empty
  if (response != "") overrides.name = response;
  return new Game({ ...defaultProps, ...overrides });
});

export { gameStarter };
