// Allow dropping items into a container
function allowDrop(event) {
  event.preventDefault();
}

// Start dragging an item
function drag(event) {
  // Store the dragged item's content as text
  event.dataTransfer.setData("text", event.target.innerHTML);
}

// Drop an item into a container
function drop(event) {
  event.preventDefault();

  // Get the dragged item's content from the stored data
  const data = event.dataTransfer.getData("text");

  // Create a new list item with the dragged item's content
  const newItem = document.createElement("li");
  newItem.innerHTML = data;

  // Append the new item to the target container
  event.target.appendChild(newItem);

  // Add a success message style to the target container
  event.target.classList.add("success-message");
}

// Reset the containers and remove the success message style
function resetContainers() {
  // Get references to the containers
  const container1 = document.getElementById("container1");
  const container2 = document.getElementById("container2");

  // Clear the second container
  container2.innerHTML = "";

  // Remove the success message style from both containers
  container1.classList.remove("success-message");
  container2.classList.remove("success-message");
}
