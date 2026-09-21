https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions


To quickly test out the difference that custom instructions can make, you can use personal custom instructions in Copilot Chat.

First, go to github.com/copilot and enter this prompt:

Create a JavaScript function that calculates the area of a circle

Without custom instructions, you might get:

function areaOfCircle(radius) {
    if (typeof radius !== 'number' || radius < 0) {
        throw new Error('Radius must be a non-negative number');
    }
    return Math.PI * radius * radius;
}
Now access your personal custom instructions by clicking on your profile picture in the bottom left of the page, then click Personal instructions. Paste the above instructions into the text box, then click Save.

Now enter the same prompt that you entered previously.

With custom instructions, you'll get something like:

/**
 * Calculates the area of a circle given its radius.
 *
 * @param {number} radius - The radius of the circle. Must be a positive number.
 * @returns {number|null} The area of the circle, or null if the input is invalid.
 *
 * @example
 * // returns 78.53981633974483
 * areaOfCircle(5);
 *
 * @example
 * // returns null (invalid input)
 * areaOfCircle(-2);
 */
function areaOfCircle(radius) {
  if (typeof radius !== "number" || isNaN(radius) || radius <= 0) {
    // Invalid input: radius must be a positive number
    return null;
  }

  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

// Example usage:
console.log(areaOfCircle(5));   // 78.53981633974483
console.log(areaOfCircle(-2));  // null