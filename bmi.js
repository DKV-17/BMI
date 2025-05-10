function updateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);

  const result = document.getElementById("result");
  const category = document.getElementById("category");

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    result.textContent = "Please enter valid weight and height.";
    category.textContent = "";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const roundedBMI = bmi.toFixed(2);
  result.textContent = `Your BMI is ${roundedBMI}`;

  let bmiCategory = "";
  if (bmi < 18.5) {
    bmiCategory = "Low Weight";
  } else if (bmi < 25) {
    bmiCategory = "Normal Weight";
  } else if (bmi < 35) {
    bmiCategory = "Obesity";
  } else {
    bmiCategory = "Severe Obesity";
  }

  category.textContent = `Category: ${bmiCategory}`;
}
