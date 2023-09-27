// Retrieve saved items from localStorage or initialize an empty array
let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

// Improved toggleLike function with more descriptive variable names and comments
function toggleLike(button) {
  button.classList.toggle("liked");
  const heartIcon = button.querySelector("i");

  // Check if the button is liked
  if (button.classList.contains("liked")) {
    heartIcon.classList.remove("far");
    heartIcon.classList.add("fas");
    button.innerHTML = "<i class='far fa-heart'></i>"; // Change text to "Unlike"
  } else {
    heartIcon.classList.remove("fas");
    heartIcon.classList.add("far");
    button.innerHTML = "<i class='far fa-heart'></i>"; // Change text to "Like"
  }
}

// Function to save an item
function saveItem(item) {
  savedItems.push(item);
  localStorage.setItem('savedItems', JSON.stringify(savedItems));

  const numItems = savedItems.length;
  alert(`Item saved! You have ${numItems} item${numItems !== 1 ? 's' : ''} in your "Save for later" folder.`);
}

// Function to remove an item
function removeItem(item) {
  const index = savedItems.indexOf(item);
  if (index !== -1) {
    savedItems.splice(index, 1);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  }
}

// Function to check if an item is saved
function isSaved(item) {
  return savedItems.includes(item);
}

// Function to initialize the "Save for later" functionality
function initializeSaveForLater() {
  // Get all the "Save for later" buttons
  const saveButtons = document.querySelectorAll('.save-button');
  const saveButtons2 = document.querySelectorAll('.save-button2');

  // Attach click event listener to each button
  saveButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const item = event.target.dataset.item;
      if (isSaved(item)) {
        removeItem(item);
        event.target.textContent = 'Save for Later';
      } else {
        saveItem(item);
        event.target.textContent = 'Saved';
      }
    });
  });

  // Set initial text for each button
  saveButtons.forEach((button) => {
    const item = button.dataset.item;
    if (isSaved(item)) {
      button.textContent = 'Saved';
    } else {
      button.textContent = 'Save for Later';
    }
  });

  // Attach click event listener to each button
  saveButtons2.forEach((button) => {
    button.addEventListener('click', (event) => {
      const item = event.target.dataset.item;
      if (isSaved(item)) {
        removeItem(item);
        event.target.textContent = 'Save for Later';
      } else {
        saveItem(item);
        event.target.textContent = 'Saved';
      }
    });
  });

  // Set initial text for each button
  saveButtons2.forEach((button) => {
    const item = button.dataset.item;
    if (isSaved(item)) {
      button.textContent = 'Saved';
    } else {
      button.textContent = 'Save for Later';
    }
  });
}



// Call the initializeSaveForLater function when the page has finished loading
window.addEventListener('load', initializeSaveForLater);

$('.dropdown').hover(
  function() {
    $(this).children('.dropdown-content').slideDown('fast');
  },
  function() {
    $(this).children('.dropdown-content').slideUp('fast');
  }
);

$(".image-container img").click(function() {
  $(this).fadeOut();
});

$(".image-container").click(function() {
  $(this).fadeOut();
});

// Chained effects on the "Recipes To Try" panel
$("#panel3")
  .hide() // Hide the panel initially
  .slideDown(500) // Slide down the panel with a duration of 500 milliseconds
  .delay(2000) // Delay the next effect by 2000 milliseconds
  .fadeOut(300); // Fade out the panel with a duration of 300 milliseconds






