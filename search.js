// 1. DOM Element Selectors
const searchbar = document.getElementById('searchbar');
const clearBtn = document.getElementById('erase');
const noResultsContainer = document.getElementById('empty');
const cards = document.querySelectorAll('.icon');

// 2. The Main Search/Filter Function
function filterCards() {
  const searchTerm = searchbar.value.toLowerCase();
  let visibleCardsCount = 0; // Track how many cards remain visible
  cards.forEach(function(card) {
    // Fetch Figcaption Text
    const figcaptionText = card.querySelector('figcaption').textContent.toLowerCase();
    // Fetch Image Alt Text
    const altText = card.querySelector('img').getAttribute('alt').toLowerCase();
    // Fetch Image data-attribute
    const classText = card.className.toLowerCase();
    // E. Evaluate Matches
    if (
      figcaptionText.includes(searchTerm) || 
      altText.includes(searchTerm) || 
      classText.includes(searchTerm)
    ) {
      card.classList.remove('hidden');
      visibleCardsCount++; // Increment count when a card is shown
    } else {
      card.classList.add('hidden');
    }
  });
  // Toggle "No Results" container based on the count of visible cards
  if (visibleCardsCount === 0 && searchTerm !== "") {
    noResultsContainer.classList.remove('hidden');
  } else {
    noResultsContainer.classList.add('hidden');
  }
}

// 3. Listeners
// Listen for user typing in searchbar
searchbar.addEventListener('input', filterCards);
// Listen for clicks on the form reset button
clearBtn.addEventListener('click', function() {
  // Clear the searchbar value
  searchbar.value = '';
  // Re-run filter on an empty string to instantly restore all cards
  filterCards();
  // Return focus to searchbar
  searchbar.focus();
});
