const input1 = document.querySelector("#input-1");
const input2 = document.querySelector("#input-2");
const body = document.querySelector("#wrapper")
const h3 = document.querySelector("#description-of-color")
const randomButton = document.querySelector("#randomButton")

const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function addColorAndTextContent() {
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
    h3.textContent = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
}

input1.addEventListener('input', addColorAndTextContent);
input2.addEventListener('input', addColorAndTextContent);

function generateRandomColor(){
    let colorValue = "#";
    for (let i = 0; i < 6; i++){
        let randomIndex =  Math.floor(Math.random() * values.length);
        colorValue += values[randomIndex];
    }
    return colorValue
}

randomButton.addEventListener("click", function() {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    h3.textContent = `linear-gradient(to right, ${color1}, ${color2})`;
})