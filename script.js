//target location to generate the grid
let container = document.querySelector('.container');
container.style.cssText = "background-color: white;"

//buttons
const blackButton = document.getElementById('black');
const greyButton = document.getElementById('grey');
const rainbowButton = document.getElementById('rainbow');
const eraserButton = document.getElementById('eraser');
const clearButton = document.getElementById('clear');
const promptQuestion = document.getElementById('promptQuestion');

let currentColor = 'black';
let lastInput;

blackButton.addEventListener("click", function() {
    currentColor = 'black';
});

greyButton.addEventListener("click", function() {
    currentColor = 'grey';
});

rainbowButton.addEventListener("click", function() {
    currentColor = 'rainbow';
});

eraserButton.addEventListener("click", function() {
    currentColor = 'white';
});

clearButton.addEventListener("click", () => {
    //Removing each row in the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //Recreating the grid with the most recent grid size entered by user
    createGrid(lastInput);
});


function createGrid(gridAmount) {
    // Removing all children from the container
    container.innerHTML = '';
    
    //generates rows on the container
    for (let i = 0; i < gridAmount; i++) {
        //creates rows and then adds it to the container
        const row = document.createElement('div');
        container.appendChild(row);

        //generates columns within each row
        for (let j = 0; j < gridAmount; j++) {
            //creating columns within each row
            const column = document.createElement('div');
            //styling 
            column.classList.add('column');
            column.style.width = `${960 / gridAmount}px`;
            column.style.height = `${500 / gridAmount}px`;
            //adding the columns within the row
            row.appendChild(column);
            //adding event listeners to each column
            column.addEventListener("mouseover", function(){
                if (currentColor === 'black') {
                    column.style.backgroundColor = 'black';
                } else if (currentColor === 'grey') {
                    column.style.backgroundColor = 'grey';
                } else if (currentColor === 'white') {
                    column.style.backgroundColor = 'white';
                } else if (currentColor === 'rainbow') {
                    const rainbow = '#'+ Math.floor(Math.random()*16777215).toString(16);
                    console.log('Generated Color:', rainbow);
                    column.style.backgroundColor = rainbow;
                }
            });
        }
    }
}

promptQuestion.addEventListener("click", function() {
    //Getting user input
    var input = prompt("Please enter a grid size from 1-100");

    //Error checking
    while (input < 1 || input > 100) {
        alert("Please enter a value within the range of 1-100");
        var input = prompt("Please enter a grid size from 1-100");
    }
    
    //storing the final valid input value
    lastInput = input;

    //Calling the function if input is valid
    createGrid(input);
});

createGrid(25);

