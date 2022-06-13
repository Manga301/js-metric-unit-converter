import "./styles.css";
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let bodyEl = document.getElementById("body-el");
const convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input-el");
let data = [
  {
    title: "Length (Meter/Feet)",
    content: `20 meters = 65.616 feet | 20 feet = 6.096 meters`
  },
  {
    title: "Volume (Liters/Gallons)",
    content: `20 liters = 5.284 gallons | 20 gallons = 75.708 liters`
  },
  {
    title: "Mass (Kilograms/Pounds)",
    content: `20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos`
  }
];

let output = "";

// ${Number(inputEl.value)}

function converter() {
  for (let i = 0; i < data.length; i++) {
    let unitTitle = data[i].title;
    let unitContent = data[i].content;

    output += `<div class="content-el">
  <h3 class="unit-el">${unitTitle}</h3>
  <p class="unit-content">
    ${unitContent}
  </p>
</div>`;
  }
  console.log(inputEl.value);
  bodyEl.innerHTML = output;

  // clear after output
  output = "";
}

convertBtn.addEventListener("click", converter);
