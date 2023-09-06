#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0) {
        // If w or h is not a positive integer or is equal to 0, create an empty object
        return 'Rectangle {}';
      }

      else if (!Number.isInteger(w) || !Number.isInteger(h) || w === undefined || h === undefined){
        return{};
      }
      
      this.width = w;
      this.height = h;
    }
  }
  
  module.exports = Rectangle;