# crushing_bugs
In this project, I’ve addressed various bugs present in a puzzle game assignment. The initial version of the game encountered issues such as overlapping pictures, images not returning to their original positions, lack of swapping functionality, and a non-functioning reset button. Through careful debugging and code modifications in JavaScript, these bugs have been identified and resolved.
Bug Fixes

1.*** Overlapping Pictures***

To resolve the issue of pictures overlapping with each other, the following JavaScript changes were made:

	•	Implemented logic to ensure that images are positioned with appropriate spacing.
	•	Adjusted the positioning algorithm to prevent images from overlapping.

2.*** Images Not Returning to Original Positions***

The bug where two images were not returning to their original positions has been fixed by:

	•	Updating the reset function to correctly reset the positions of all images.
	•	Verifying that the reset mechanism restores the initial state of the puzzle.

3.*** Swapping Functionality***

To enable swapping of puzzle pieces, the following JavaScript updates were applied:

	•	Implemented a swapping algorithm to allow adjacent puzzle pieces to exchange positions.
	•	Added event listeners to handle user interactions for swapping pieces.

4. ***Non-Functioning Reset Button***

The reset button now functions properly after the following JavaScript adjustments:

	•	Fixed the event handler for the reset button to trigger the reset function.
	•	Ensured that the reset function correctly resets the puzzle state.