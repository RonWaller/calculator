let calcButton = document.querySelectorAll(".btn");

for (let i = 0; i < calcButton.length; i++) {
    calcButton[i].addEventListener("click", function() {
        value = this.value;
        displayValue(value);
    });
}

function displayValue(value) {
    let display = document.querySelector('.display');
    if (value == '=') {
        evaluate(display);
    } else if (value == 'C') {
        clear(display);
    } else if (value == 'back' && display.innerHTML.length >= 0) {
        value = '';
        backspace(display);
    } else if (value == '%') {
        percent(display);
    } else {
        display.innerHTML += `${value}`;
    }
}

function evaluate(display) {
    let string = display.innerHTML;
    if (string.includes('sqroot ')) {
        squareRoot(display)
    } else {
        let answer = eval(display.innerHTML);
        display.innerHTML = answer;
    }

}

function clear(display) {
    display.innerHTML = '';
}

function backspace(display) {
    let string = display.innerHTML;
    let newString = string.slice(0, -1);
    display.innerHTML = newString;
}

function percent(display) {
    let string = display.innerHTML;
    if (string.includes(' * ')) {
        let answer = (eval(string) / 100);
        display.innerHTML = answer;
    } else if (string.includes(' / ')) {
        let splitString = string.length > 0 ? string.split(' ') : [];
        let newString = `${splitString[0]} / (${splitString[2]} / 100)`;
        let answer = eval(newString);
        display.innerHTML = answer;
    } else if (string.includes(' + ')) {
        let splitString = string.length > 0 ? string.split(' ') : [];
        let newString = `${splitString[0]} + (${splitString[0]} * (${splitString[2]} / 100))`;
        let answer = eval(newString);
        display.innerHTML = answer;
    } else if (string.includes(' - ')) {
        let splitString = string.length > 0 ? string.split(' ') : [];
        let newString = `${splitString[0]} - (${splitString[0]} * (${splitString[2]} / 100))`;
        let answer = eval(newString);
        display.innerHTML = answer;
    }
}

function squareRoot(display) {
    let string = display.innerHTML;
    let array = string.split(' ');
    let newString = `Math.sqrt(${array[1]})`
    let answer = eval(newString);
    display.innerHTML = answer;
}