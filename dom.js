console.log("hello world");

// Retrieve existing data from local storage
var storedData = JSON.parse(localStorage.getItem('itemData')) || [];

// Function to handle the deletion of an item
function handleDelete() {
  // Get the index of the item in the array
  var index = parseInt(this.dataset.index);

  // Remove the item from the array
  storedData.splice(index, 1);

  // Save the updated data back to local storage
  localStorage.setItem('itemData', JSON.stringify(storedData));

  // Remove the item from the UI
  this.parentElement.remove();
}

// Function to handle the edit of an item
function handleEdit(index) {
  // Get the item from the array
  var item = storedData[index];

  // Prompt the user for new name and description
  var newName = prompt('Enter the new name:', item.name);
  var newDescription = prompt('Enter the new description:', item.description);

  // Update the item in the array
  storedData[index] = {
    name: newName,
    description: newDescription
  };

  // Save the updated data back to local storage
  localStorage.setItem('itemData', JSON.stringify(storedData));

  // Update the item in the UI
  var listItem = document.querySelectorAll('.list-group-item')[index];
  listItem.querySelector('span').textContent = newName;
  listItem.querySelector('p').textContent = newDescription;
}

// Function to handle form submission (adding items)
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default 
