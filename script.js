document.addEventListener('DOMContentLoaded', function () {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const unitSelector = document.getElementById('unitSelector');
    const calculateButton = document.getElementById('calculate');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');
    const resultDiv = document.getElementById('result');

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);
        const selectedUnit = unitSelector.value;

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Please enter valid weight and height.');
            return;
        }

        let bmi;

        if (selectedUnit === 'kg/cm') {
            bmi = weight / Math.pow(height / 100, 2);
        } else if (selectedUnit === 'lbs/in') {
            bmi = (weight / Math.pow(height, 2)) * 703;
        } else {
            alert('Invalid unit selection');
            return;
        }

        bmiValue.textContent = bmi.toFixed(2);

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal Weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
        bmiCategory.textContent = `Category: ${category}`;

        resultDiv.style.display = 'block';
    }

    calculateButton.addEventListener('click', calculateBMI);
});
