# Etch-a-Sketch

In this project, I will make a Etch-a-Sketch webpage. This project is about my skills of basic Javascript, refering to DOM and Events. I will be using HTML, CSS and Javascript.

# Plan 

- Does your program have a user interface? What will it look like? What functionality will the interface have? 
At this moment, there will be a interface that, from my current perspective, it will be a white webpage.
- What inputs will your program have? Will the user enter data or will you get input from somewhere else? 
I will get the data from its click. At this moment, Im not sure where I will be store the click. It could be an Event.
- What’s the desired output? 
The user will be painting the webpage, changing the white div into a black div, as if the mouse is a pencil.
- Given your inputs, what are the steps necessary to return the desired output?
Creating the divs, with the option of how many divs the user will want in the webpage.
Events with the click event, probably one of them it will be about changing the background color.

# Pseudocode 

1. There is a default number of quarters being 16, and a label with the free option of the user choosing the number (limiting over 100), so the divs will be part of DOM and not part of HTML file.
2. I have to create an Event that change the color every time the mouser goes over the div. There will be a random function, so the div has a random RGB color, with an increasing opacity. 
3. Create a button to reset the webpage, changing all thee divs from random colors to white.

# Concepts I learnt

- QuerySelectorAll: a way to get all the elements into a solely variable. The thing with this function is that you can write the child with the parent inside the (), as I used it in the project: "let quarters = document.querySelectorAll('#container div')"

- innerHTML: a way to insert any information inside the choosen element. I used this to erase everything inside the border, so instead of repeating the quarters, the old quarters are eliminated and replaced for the new quarters (as I call the game function in the next line).

 - Flexbox Grow and Flexbox Basis: Grow works to adjust my quarters, so there's no space left. Basis works to adjust in the line equality.

 # Things to improve in the future

- Commit: I was so inmerse into this project that it's lack of commits. This part of the project will be improved for the next projects.