const sides = document.querySelectorAll('.side');
const btn = document.querySelector('#btn');
const outputBlock = document.querySelector('#output-block');

const calculateHypotenuse = () => {
  if (isNaN(sides[0].value) === true || isNaN(sides[1].value) === true) {
    showOutput('Invalid side');
  } else {
    const sumOfSquares = calculateSum(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const hypotenuse = Math.sqrt(sumOfSquares);
    showOutput(`the length of hypotenuse is ${hypotenuse} cm²`);
  }
};

const calculateSum = (a, b) => a * a + b * b;

const showOutput = (text) => (outputBlock.innerText = text);

btn.addEventListener('click', calculateHypotenuse);
