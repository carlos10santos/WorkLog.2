const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
const backgroundColors = ["#FFFFFF", "#8A307F", "#5733FF", "#000000"];

let currentIndex = 0; // Índice da cor atual 

function changeBackground() {
    document.body.style.backgroundColor = backgroundColors[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundColors.length;
}

changeBackgroundBtn.addEventListener("click", changeBackground);

document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        const taskTitleElement = document.getElementById('inputDesc');
        let descript = document.createElement('h3');
        descript = taskTitleElement.value;
    }
})
