'use strict';

/*
Classes:
- Car
- Light
*/

// FUNCTIONALITY / CLASSES: ////////////////////////////////////////////////////////////

class Light {
  lightPositions = [];

  constructor(element) {
    this.element = element;
    this._getLights();
  }

  //  PRIVATE METHODS //////////////////////////////////////////////////////////////////
  // Identify the class of the element
  _getClassName(n) {
    return n.className.split(' ')[1];
  }

  // Add all the lights to the lightPositions Array
  _getLights() {
    const allLights = document.querySelectorAll(
      `.${this._getClassName(this.element)} .light`
    );
    this.lightPositions = Array.from(allLights);
    console.log(this.lightPositions);
  }

  _changeLight(color) {
    this.lightPositions.forEach(n =>
      this._getClassName(n) === color
        ? n.classList.remove('light-inactive')
        : n.classList.add('light-inactive')
    );
  }

  //  PUBLIC METHODS //////////////////////////////////////////////////////////////////

  getActiveLight() {
    for (const n of this.lightPositions) {
      if (!n.classList.contains('light-inactive')) {
        return this._getClassName(n).split('-')[1]; // return the active light color
      }
    }
    return null;
  }

  // Change the light to red
  stop() {
    this._changeLight('light-red');
  }

  // Change the light to yellow
  warning() {
    this._changeLight('light-yellow');
  }

  // Change the light to green
  pass() {
    this._changeLight('light-green');
  }
}

class Car {
  constructor(element, position, speed) {
    this.element = element;
    this.position = position;
    this.speed = speed; // The lower the value, the higher the speed

    this._moveCar();
  }

  _createCar() {}

  _moveCar(speed) {
    if (this.position === 'left') {
      if (!this.element.style.left) {
        this.element.style.left = '0px'; // Start from 0 if not defined
      }

      setInterval(() => {
        this.element.style.left = `${
          Number.parseInt(this.element.style.left) + 1
        }px`;
      }, this.speed);
    }

    if (this.position === 'right') {
      if (!this.element.style.top) {
        this.element.style.top = '0px'; // Start from 0 if not defined
      }

      setInterval(() => {
        this.element.style.top = `${
          Number.parseInt(this.element.style.top) + 1
        }px`;
      }, this.speed);
    }
  }

  _deleteCar() {}
}

class App {}

// VARIABLES  //////////////////////////////////////////////////////////////////////////////////////////

const lightTop = new Light(document.querySelector('.traffic-top'));
const lightLeft = new Light(document.querySelector('.traffic-left'));

const topCar = new Car(document.querySelector('.car-x--top'), 'left', 50);
const bottomCar = new Car(document.querySelector('.car-x--bottom'), 'left', 20);

const LeftCar = new Car(document.querySelector('.car-y--left'), 'right', 10);
const RightCar = new Car(document.querySelector('.car-y--right'), 'right', 35);

const init = new App();
