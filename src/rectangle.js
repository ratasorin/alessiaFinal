import { friction } from "./constants";

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
    this.xVel = 0;
    this.yVel = 0;
  }

  moveLeft(xVel) {
    this.xVel = xVel;
    this.x += this.xVel;
  }
  moveRight(xVel) {
    this.xVel = xVel;
    this.x += this.xVel;
  }
  moveUp(yVel) {
    this.yVel = yVel;
    this.y += this.yVel;
  }
  moveDown(yVel) {
    this.yVel = yVel;
    this.y += this.yVel;
  }

  moveX() {
    this.x += this.xVel;
  }
  moveY() {
    this.y += this.yVel;
  }
  updatePoz() {
    this.yVel *= friction;
    this.xVel *= friction;

    this.moveX();
    this.moveY();
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
}
