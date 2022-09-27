/**
 * @description - Task 3
 * @function createClassRoom - Create class Room
 * @param {Number} numbersOfStudents - number of students
 * @returns {Number} - Return number of students
 */

function createClassRoom (numbersOfStudents) {
  /**
     * @function studentSeat - define number of student seats
     * @param {Number} seat - number of set
     * @returns {Number} - Return number of seats
     */
  function studentSeat (seat) {
    return function () {
      return seat;
    };
  }
  /**
     * @var {Array} students - number of students
     * @var {Number} start - Iterator
     */
  const students = [];

  for (let start = 0; start < numbersOfStudents; start++) {
    students.push(studentSeat(start + 1));
  }
  return students;
}
const classRoom = createClassRoom(10);
