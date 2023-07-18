// Retrieve saved items from localStorage or initialize an empty array
let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

// Function to display saved items
function displaySavedItems() {
  const savedItemsList = document.getElementById('saved-items-list');
  savedItemsList.innerHTML = '';

  if (savedItems.length === 0) {
    const message = document.createElement('li');
    message.textContent = 'Your "Save for later" folder is empty.';
    savedItemsList.appendChild(message);
  } else {
    savedItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;

      // Create an image element
      const image = document.createElement('img');
      image.src = getImageURL(item);
      image.alt = item;

      listItem.appendChild(image);

      // Add comment form
      const commentForm = document.createElement('form');
      const commentInput = document.createElement('input');
      commentInput.type = 'text';
      commentInput.placeholder = 'Leave a comment';
      const commentSubmit = document.createElement('button');
      commentSubmit.type = 'submit';
      commentSubmit.textContent = 'Submit';
      commentForm.appendChild(commentInput);
      commentForm.appendChild(commentSubmit);

      // Add the comment form to the list item
      listItem.appendChild(commentForm);

      savedItemsList.appendChild(listItem);
    });
  }
}


// Function to get the image URL based on the item name
function getImageURL(item) {
  switch (item) {
    case 'cheesecake-brownies':
      return 'https://insanelygoodrecipes.com/wp-content/uploads/2021/04/Cheesecake_Brownies-768x1152.webp';
    case 'Dark Chocolate Tart':
      return 'https://i.pinimg.com/564x/0c/fa/e2/0cfae230c5f6ed95b78a77c72fe402be.jpg';
    case 'No-Bake Blueberry Cheesecake':
      return 'https://i.pinimg.com/564x/ea/bb/5c/eabb5c64011133d536ba32c3847003ab.jpg';
    case 'Berries and Cream Crepes':
      return 'https://i.pinimg.com/564x/44/3b/0d/443b0ddde6a5bca8925858de31a4a47f.jpg';
    case 'Beignets':
      return 'https://i.pinimg.com/564x/39/23/5d/39235d231dd0543a55d3e3d23fb1cc48.jpg';
    case 'Cheesy chicken tray bake with leek and bacon':
      return 'https://img.taste.com.au/jwTYQjbM/w720-h480-cfill-q80/taste/2020/12/jan21-cheesy-chicken-tray-bake-with-leek-and-bacon-taste-1-168307-1.jpg';
    case 'Surf and turf rissole traybake':
      return 'https://img.taste.com.au/4T67wm6c/w720-h480-cfill-q80/taste/2020/12/giant-skillet-haloumi-zucchini-fritter-168379-2.jpg';
    case 'Crispiest sweetcorn fritters':
      return 'https://img.taste.com.au/5b93j5J2/w720-h480-cfill-q80/taste/2021/01/crispiest-fritters-ever-168502-2.jpg';
    case 'Lemon butter prawns':
      return 'https://img.taste.com.au/7kDkCl_h/w720-h480-cfill-q80/taste/2021/01/lemon-butter-prawns-168504-2.jpg';
    case 'Almost-instant creamy chicken and corn noodles':
      return 'https://img.taste.com.au/-Upv8gzm/w720-h480-cfill-q80/taste/2021/01/almost-instant-creamy-chicken-and-corn-noodles-168503-2.jpg';
    
      case 'Lemon Garlic Butter Salmon':
      return 'https://natashaskitchen.com/wp-content/uploads/2018/05/Pan-Seared-Salmon-with-Lemon-Butter-Sauce-5.jpg';
    case 'Chicken Parmesan':
          return 'https://tastesbetterfromscratch.com/wp-content/uploads/2023/03/Chicken-Parmesan-1.jpg';
    case 'Beef Stir-Fry with Vegetables':
          return 'https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg';
    case 'Caprese Stuffed Chicken Breast':
          return 'https://hips.hearstapps.com/hmg-prod/images/delish-caprese-stuffed-chicken-still002-1521227706.jpg?crop=0.75xw:1xh;center,top&resize=1200:*';
    case 'Vegetable Curry':
          return 'https://www.noracooks.com/wp-content/uploads/2022/08/vegan-curry-8.jpg';
    case 'Classic Chocolate Cake':
          return 'https://www.realsimple.com/thmb/OaoAsUyZgo1-XOMB5HJyV8BopSs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate-cake_300-bb89786b17ec43079e423654d4e08cd9.jpg';
    case 'Homemade Apple Pie':
          return 'https://simplyhomecooked.com/wp-content/uploads/2020/04/apple-pie-recipe-13-scaled.jpg';
    case 'Strawberry Cheesecake':
          return 'https://hips.hearstapps.com/hmg-prod/images/delish-202105-strawberrycheesecake-135-ls-1623955969.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*';
    case 'Tiramisu':
          return 'https://sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg';
    case 'Mixed Berry Crumble':
          return 'https://realfood.tesco.com/media/images/berry-almond-crumble-HERO-2c265ff6-f01e-445c-99d2-fa601812e81c-0-472x310.jpg';

      default:
      return ''; // Return an empty string if no matching image URL is found
  }
}

// Function to handle comment submission
function handleCommentSubmit(event) {
  event.preventDefault();
  const commentText = event.target.querySelector('input[type="text"]').value;
  // Handle the comment submission (e.g., send to server or store locally)
  console.log('Comment:', commentText);
  // Clear the comment input field
  event.target.reset();
}

// Function to handle contact form submission
function handleContactSubmit(event) {
  event.preventDefault();
  const name = event.target.querySelector('#name').value;
  const email = event.target.querySelector('#email').value;
  const message = event.target.querySelector('#message').value;
  // Handle the contact form submission (e.g., send to server)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  // Clear the contact form fields
  event.target.reset();
}

// Call the displaySavedItems function when the page has finished loading
window.addEventListener('load', displaySavedItems);

// Add event listeners to the forms
document.getElementById('comment-form').addEventListener('submit', handleCommentSubmit);
document.getElementById('contact-form').addEventListener('submit', handleContactSubmit);
