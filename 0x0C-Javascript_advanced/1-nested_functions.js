/**
 * @description - Task 1
 * @var {String} globalVariable - Contains text
 */

const globalVariable = 'Welcome';

/**
 * @function outer - Alert with one value and inner function
 */

function outer () {
  alert(globalVariable);
  /**
     * @var {String} course - Text
     */
  const course = 'Holberton';

  /**
     * @function inner - Alert with two concatenated values and inner function
     */
  function inner () {
    alert(globalVariable + ' ' + course);
    /**
         * @var {String} exclamation - Contains a character
         */
    const exclamation = '!';

    /**
         * @function inception - Alert with the three concatenate values
         */
    function inception () {
      alert(globalVariable + ' ' + course + exclamation);
    }
    inception();
  }
  inner();
}
outer();
