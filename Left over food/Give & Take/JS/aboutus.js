document.addEventListener('DOMContentLoaded', function () {
  const foodItems = document.querySelectorAll('.food-item');
  const popup = document.getElementById('restaurant-popup');
  const popupTitle = document.getElementById('popup-title');
  const restaurantList = document.getElementById('restaurant-list');
  const closePopup = document.querySelector('.close-popup');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  // Function to filter food items based on search query
  function searchFood(query) {
      foodItems.forEach(item => {
          const foodName = item.getAttribute('data-food').toLowerCase();
          if (foodName.includes(query.toLowerCase())) {
              item.style.display = 'block'; // Show matching items
          } else {
              item.style.display = 'none'; // Hide non-matching items
          }
      });
  }

  // Add click event to each food item
  foodItems.forEach(item => {
      item.addEventListener('click', function () {
          const foodName = item.getAttribute('data-food');
          const restaurants = item.getAttribute('data-restaurants').split(', ');

          // Update popup content
          popupTitle.textContent = `Restaurants with ${foodName}`;
          restaurantList.innerHTML = restaurants.map(restaurant => `<li>${restaurant}</li>`).join('');

          // Show the popup
          popup.style.display = 'flex';
      });
  });

  // Close the popup when the close button is clicked
  closePopup.addEventListener('click', function () {
      popup.style.display = 'none';
  });

  // Close the popup when clicking outside the popup content
  window.addEventListener('click', function (event) {
      if (event.target === popup) {
          popup.style.display = 'none';
      }
  });

  // Search button click event
  searchButton.addEventListener('click', function () {
      const query = searchInput.value.trim();
      searchFood(query);
  });

  // Search on pressing Enter key
  searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          const query = searchInput.value.trim();
          searchFood(query);
      }
  });
});