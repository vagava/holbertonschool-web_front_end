/**
 * @description - Task 12
 * @var {object} roomDimensions - Object
 * @function getArea - Returns surface area of object utilizing the width and length
 * @returns {Number} - Surface area object
 * @var {Number} boundGetArea
 */

const roomDimensions = {

  width: 50,
  length: 100,
  getArea () {
    return this.width * this.length;
  }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(roomDimensions.getArea());
