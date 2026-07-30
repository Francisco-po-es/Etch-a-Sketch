let container = document.getElementById('container');
let resetButton = document.getElementById('reset');
let input = document.querySelector('input')
// Default number of quarters
let number = 16;

function painting() {
    for (let i = 0; i < (number*number); i++) {
        let div = document.createElement('div');
        // Percent of how many space every quarter will get
        div.style.flexBasis = `${100/number}%`;
        // Accomodation if tehre's space left in the board
        div.style.flexGrow = '1';
        div.addEventListener('mouseover', () => {
            let currentOpacity = Number(div.style.opacity);    
            if (currentOpacity < 1) {
                // Opacity of every quater going 10% up everytime the mouse moves over them.
                currentOpacity += 0.1;
                div.style.opacity = currentOpacity;    
             }
             // Randome RGB color number
            let redRGB = Math.floor(Math.random() * 256);
            let greenRGB = Math.floor(Math.random() * 256);
            let blueRGB = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${redRGB},${greenRGB},${blueRGB})`;
        })
        container.appendChild(div);
    }
}

function game() {
    // Limit of quarters per side being 100
    if (number < 100) {
        painting();
    } else {
        alert('You have to choose another number of quarters.');
        number = 16;
        painting();
    }
}

function resetQuarters() {
    // Variable that store all the quarters when they're created
    let quarters = document.querySelectorAll('#container div')
    quarters.forEach(element => {
        // Turn those quarters into a white color as reset
        element.style.backgroundColor = 'white';  
    });
}

resetButton.addEventListener('click', resetQuarters)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // Variable of the input turning into the new lenght of quarters
        number = Number(input.value);
        // Board empty
        container.innerHTML = '';
        // Input empty
        input.value = '';
        // Game to start
        game();  
    }
})

game();