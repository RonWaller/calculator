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
    console.log(value);
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
    console.log(display.innerHTML);
    console.log(display.innerHTML.length);
    let answer = eval(display.innerHTML);
    console.log(answer);
    console.log(typeof answer);
    display.innerHTML = answer;
}

function clear(display) {
    display.innerHTML = '';
}

function backspace(display) {
    let string = display.innerHTML;
    console.log('back function');
    console.log(string);
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
        console.log(splitString);
        let newString = `${splitString[0]} / (${splitString[2]} / 100)`;
        console.log(newString);
        let answer = eval(newString);
        display.innerHTML = answer;
    } else if (string.includes(' + ')) {
        let splitString = string.length > 0 ? string.split(' ') : [];
        console.log(splitString);
        let newString = `${splitString[0]} + (${splitString[0]} * (${splitString[2]} / 100))`;
        console.log(newString);
        let answer = eval(newString);
        display.innerHTML = answer;
    } else if (string.includes(' - ')) {
        let splitString = string.length > 0 ? string.split(' ') : [];
        console.log(splitString);
        let newString = `${splitString[0]} - (${splitString[0]} * (${splitString[2]} / 100))`;
        console.log(newString);
        let answer = eval(newString);
        display.innerHTML = answer;
    }
}

//discount or percentage of
// amount * (percent / 100)

//percent increase
//amount