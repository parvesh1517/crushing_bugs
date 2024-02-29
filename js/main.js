// variables always go at the top -> this is step 1
// these are the connections that you're making to elements on the page 
// use CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable -> querySelector("queryString")
// let theButton = document.querySelector("#buttonOne");

// create a 1 to many connection with a variable -> querySelectorAll("queryString")
let theButtons = document.querySelectorAll("#buttonHolder img"),
    theHeading = document.querySelector("#headLine h1"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll('.drop-zone'),
    // Store a reference to the container holding puzzle pieces.
    // This is declared separately to easily manipulate puzzle pieces (e.g., reset their position).
    puzzlePiecesContainer = document.querySelector('.puzzle-pieces'),
    // store the dragged piece in a global variable
    // because we need it in the handleDrop function
    draggedPiece,
    originalParent; // Declare originalParent here


// step 3
// functionality always goes in the middle -> how do we want
// the app to behave?

// Function to change the background image of the puzzle board.
function changeBGImage() {
    // Bug fix #2: Ensure puzzle pieces reset properly when changing the background image.
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    // Clear out the drop zones when changing puzzles
    dropZones.forEach(zone => { while (zone.firstChild) { zone.removeChild(zone.firstChild); } });
    // Reset puzzle pieces to their original position by appending them back to the .puzzle-pieces container
    puzzlePieces.forEach(piece => { puzzlePiecesContainer.appendChild(piece); });
}

//bug fix #4- reset button on the page was not working. hence implemented the functionality below
// Function to reset puzzle pieces to their original positions
function resetPuzzle() {
    // Remove all puzzle pieces from drop zones and append them back to the puzzle container
    let puzzlePiecesContainer = document.querySelector('.puzzle-pieces');
    let dropZones = document.querySelectorAll('.drop-zone');

    dropZones.forEach(zone => {
        while (zone.firstChild) {
            puzzlePiecesContainer.appendChild(zone.firstChild);
        }
    });
}

// Event listener for the reset button
document.getElementById('resetBut').addEventListener('click', function() {
    resetPuzzle();
});



// Function to handle the start of dragging a puzzle piece.
function handleStartDrag() { 
    console.log('started dragging this piece:', this);
    // store a reference to the puzzle piece image that we're dragging
    // so we can use it later and move it to a drop zone
    draggedPiece = this;
    // Store the original parent of the dragged piece
    originalParent = this.parentElement;
}

// Function to handle dragging over a drop zone.
function handleDragOver(e) { 
    e.preventDefault(); // e is shorthand for event
    // this overrides the default dragover behavior
    console.log('dragged over me'); 
}

// Function to handle dropping a puzzle piece onto a drop zone.
function handleDrop(e) { 
    e.preventDefault();
    console.log('dropped something on me');
    // Bug Fix #1: Prevent dragging puzzle pieces over each other
    // Bug Fix #3: Swapping puzzle pieces if drop zone already contains a piece
    // Check if the drop zone already contains a puzzle piece
    if (this.children.length !== 0 && this.children[0] !== draggedPiece) {
        // Store the piece currently in the drop zone
        let pieceInDropZone = this.children[0];

        // Get the parent of the dragged piece
        let draggedPieceParent = draggedPiece.parentNode;

        // Move the piece in the drop zone to the original parent of the dragged piece
        draggedPieceParent.appendChild(pieceInDropZone); // Move the piece in the drop zone back to its original parent

        // Move the dragged piece to the drop zone
        this.appendChild(draggedPiece); // Move the dragged piece to the drop zone
    } else if (this.children.length === 0) {
        // If the drop zone is empty, just append the dragged piece
        this.appendChild(draggedPiece);
    }
}

// step 2
// event handling always goes at the bottom => 
// how do we want users to interact with our app

// 1 to 1 event handling
//theButton.addEventListener("click", changeBGImage);

// 1 to many event handling
// add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// add the drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

// add the dragover AND the drop event handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
