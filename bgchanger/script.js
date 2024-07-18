let btn = document.querySelector("button");
let body = document.querySelector("body");
let colorName = document.querySelector(".colorName")
btn.addEventListener("click", ()=>{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
    colorName.innerHTML = color;
})