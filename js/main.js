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
    display.innerHTML += `${value}`;
}