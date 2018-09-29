let calcButton = document.querySelectorAll(".btn");
console.log(calcButton);

for (let i = 0; i < calcButton.length; i++) {
    calcButton[i].addEventListener("click", function() {
        value = this.value;
        console.log(value);
        console.log(typeof value);
        displayValue(value);
    });
}

function displayValue(value) {
    let display = document.querySelector('.display');
    if (value == '=') {
        evaluate(display);
    } else if (value == 'C') {
        clear(display);
    } else if (value == 'back' && display.innerHTML.length > 0) {
        backspace(display);
    } else {
        display.innerHTML += `${value}`;
    }
}

function evaluate(display) {
    let answer = eval(display.innerHTML);
    console.log(answer);
    display.innerHTML = answer;
}

function clear(display) {
    display.innerHTML = ' ';
}

function backspace(display) {
    let string = display.innerHTML;
    let newString = string.slice(0, -1);
    display.innerHTML = newString;
}