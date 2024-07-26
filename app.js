let button = document.querySelector("button");

button.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let rendomColor = getRendomColor();
    h3.innerText = rendomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = rendomColor;
});

function getRendomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red} ,${green}, ${blue})`;
     return color
}

// let button = document.querySelector("button");


// button.addEventListener("click", function() {
  
//     let h3 = document.querySelector("h3");

  
//     let randomColor = getRandomColor();

    
//     h3.innerText = randomColor;

    
//     let div = document.querySelector("div");

 
//     div.style.backgroundColor = randomColor;
// });


// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

    
//     return `rgb(${red}, ${green}, ${blue})`;
// }
