const sides = document.querySelectorAll('.side');
const btn = document.querySelector('#btn');
const outputBlock = document.querySelector('#output-block');

const calculateArea = () => {
  if (isNaN(sides[0].value) === true || isNaN(sides[1].value) === true) {
    showOutput('invalid input');
  } else {
    const areaOfTriangle = (1 / 2) * (sides[0].value * sides[1].value);
    showOutput(`Area of the triangle is ${areaOfTriangle} cm²`);
  }
};

const showOutput = (text) => (outputBlock.innerText = text);

btn.addEventListener('click', calculateArea);
