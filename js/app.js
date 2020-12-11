let button = document.getElementById("btn")
button.addEventListener('click', () => {
    let hexColors = ["0","1","2","3", "4","5","6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let n1 = hexColors[Math.floor(Math.random() * hexColors.length)];
    let n2 = hexColors[Math.floor(Math.random() * hexColors.length)];
    let n3 = hexColors[Math.floor(Math.random() * hexColors.length)];
    let n4 = hexColors[Math.floor(Math.random() * hexColors.length)];
    let n5 = hexColors[Math.floor(Math.random() * hexColors.length)];
    let n6 = hexColors[Math.floor(Math.random() * hexColors.length)];
    let randomHexColor = "#" + n1 + n2 + n3 + n4 + n5 + n6
    document.body.style.backgroundColor = randomHexColor
    let hexValue = document.getElementById("hex-value")
    hexValue.textContent = " " + randomHexColor
})