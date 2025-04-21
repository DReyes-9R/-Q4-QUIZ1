function toggleInstructions() {
  const instructions = document.querySelector('.instructions');
  instructions.style.display = instructions.style.display === 'block' ? 'none' : 'block';
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (weight > 0 && height > 0) {
    const bmi = weight / (height * height);

    let category = '';
    if (bmi < 18) {
      category = 'Underweight, hmmm maybe start eating more (your probably built like a stick right now)';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal weight, nice';
    } else if (bmi >= 25 && bmi <= 30) {
      category = 'Overweight, go on a diet, nowwww';
    } else {
      category = 'Obese, woahhhh what have you been eating? Go to the gym ';
    }

    document.getElementById('result').innerHTML =
      `Your BMI is ${bmi.toFixed(2)}. Category: <span class="text-primary">${category}</span>`;
  } else {
    alert("Please enter valid numbers for weight and height.");
  }
}

function reloadPage() {
  const confirmRefresh = confirm("Are you sure you want to refresh?");
  if (confirmRefresh) {
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('result').innerHTML = "";
  }
}
