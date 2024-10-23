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
    this.lightPositions.forEach(n => {
      if (!n.classList.value.includes('light-inactive')) {
        return n.classList.value.split(' ')[1].split('-')[1];
      }
    });
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

class Car {}

class App {}

// VARIABLES  //////////////////////////////////////////////////////////////////////////////////////////

const lightTop = new Light(document.querySelector('.traffic-top'));
const lightLeft = new Light(document.querySelector('.traffic-left'));

const init = new App();
