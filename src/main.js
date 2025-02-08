import { add } from './calculator.js';

document.getElementById('calculateButton').addEventListener('click', () => {
  const input = document.getElementById('numberInput').value;
  const resultDiv = document.getElementById('result');
  try {
    const sum = add(input);
    resultDiv.style.color = "green";
    resultDiv.textContent = "Sum: " + sum;
  } catch (e) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Error: " + e.message;
  }
});
