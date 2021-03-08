import { MOVE_SPEED } from "./constants";

/**
 * The **Rectangle** class defines the logic and methods for
 * every character on the screen
 */
export default class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  // setters
  moveLeft() {
    this.x -= MOVE_SPEED;
  }
  moveRight() {
    this.x += MOVE_SPEED;
  }
  moveUp() {
    this.y -= MOVE_SPEED;
  }
  moveDown() {
    this.y += MOVE_SPEED;
  }

  // getters
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
}
