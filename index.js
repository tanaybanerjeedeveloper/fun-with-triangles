const angles = document.querySelectorAll('.angle-input');
const btn = document.querySelector('#btn');
const outputBlock = document.querySelector('#block__output');

const sumOfAngles = (angle1, angle2, angle3) => angle1 + angle2 + angle3;

const isTriangle = () => {
  if (
    angles[0].value === '' ||
    angles[1].value === '' ||
    angles[2].value === ''
  ) {
    outputBlock.innerText = 'Please enter the input values';
  } else {
    const sum = sumOfAngles(
      Number(angle1.value),
      Number(angle2.value),
      Number(angle3.value)
    );
    if (sum === 180) {
      outputBlock.innerText = 'Yay! Its a Triangle';
    } else {
      outputBlock.innerText = 'Not a Triangle!';
    }
  }
};

btn.addEventListener('click', isTriangle);
