// Change text content dynamically
const mainTitle = document.getElementById('main-title');
mainTitle.textContent = 'Welcome to the Dynamic DOM Example!';

// Modify CSS style dynamically
mainTitle.style.color = 'maroon';
mainTitle.style.fontFamily = 'Arial, sans-serif';

// Add or remove an element when button is clicked
const button = document.getElementById('toggle-btn');
const contentSection = document.getElementById('content-section');

let itemAdded = false;

button.addEventListener('click', () => {
  if (!itemAdded) {
    const newItem = document.createElement('p');
    newItem.textContent = 'This is a dynamically added paragraph.';
    newItem.id = 'dynamic-item';
    newItem.style.color = 'green';
    contentSection.appendChild(newItem);
    button.textContent = 'Remove Item';
    itemAdded = true;
  } else {
    const item = document.getElementById('dynamic-item');
    if (item) {
      contentSection.removeChild(item);
    }
    button.textContent = 'Add Item';
    itemAdded = false;
  }
});
