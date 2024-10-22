function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        if (result === Infinity || isNaN(result)) {
            throw new Error('Invalid calculation');
        }
        display.value = result;
    } catch (error) {
        alert('Error: ' + error.message);
        clearDisplay();
    }
}