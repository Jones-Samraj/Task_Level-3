function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
function del(){
    const display = document.getElementById('display');
    display.value = Math.floor(display.value/10)
}
function calculate() {
    const display = document.getElementById('display');
    const result = eval(display.value);
    display.value = result;
}