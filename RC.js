const generateClr = () => {
    //random number+hex
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNumber.toString(16);
    //changing both ids
    document.body.style.backgroundColor = randomColor
    document.getElementById("color-code").innerText = randomColor;
    // navigator.clipboard.writeText(randomColor);
}

//function call
document.getElementById("btn").addEventListener("click", generateClr);
generateClr()
