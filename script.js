//target location to generate the grid
let container = document.querySelector('.container');
container.style.cssText = "background-color: white;"
function createGrid(gridAmount) {

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
        }
    }
}

//Getting user input
var input = prompt("Please enter a grid size from 1-100");

//Error checking
while (input < 1 || input > 100) {
    alert("Please enter a value within the range of 1-100");
    var input = prompt("Please enter a grid size from 1-100");
}

//Calling the function if input is valid
createGrid(input);

