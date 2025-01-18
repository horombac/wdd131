// Declare variables to hold references to the input, button, and list elements
const input = document.querySelector('#favchap'); // Assuming the input has this ID
const button = document.querySelector('button'); // The Add Chapter button
const list = document.querySelector('#list'); // Assuming the list has this ID
const li = document.createElement('li'); // Create a li element for the chapter
const deleteButton = document.createElement('button'); // Create a delete button

// Set initial text content of li and delete button (though these will be updated inside the event listener)
deleteButton.textContent = '❌';

// Add a click event listener to the Add Chapter button
button.addEventListener('click', function() {
    // Get the value from the input field
    const chapterTitle = input.value.trim();

    // Check if input is not blank
    if (chapterTitle !== '') {
        // Create a new li element for the chapter
        const li = document.createElement('li');
        li.textContent = chapterTitle;

        // Create the delete button and set text to '❌'
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Append the delete button to the li
        li.append(deleteButton);

        // Append the li to the list
        list.append(li);

        // Add an event listener to the delete button to remove the li when clicked
        deleteButton.addEventListener('click', function() {
            list.removeChild(li); // Remove the li from the list
        });

        // Clear the input field after adding the chapter
        input.value = '';
    } else {
        // Provide a message if the input is empty
        alert('Please enter a chapter title before adding.');
    }

    // Focus back on the input field, regardless of whether a chapter was added
    input.focus();
});
