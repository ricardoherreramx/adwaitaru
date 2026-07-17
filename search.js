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
    // Fetch Figcaption Text (with safety check in case a card lacks a figcaption)
    const figcaptionText = card.querySelector('figcaption').textContent.toLowerCase();
    // Fetch Image Alt Text (with safety check in case an image lacks alt text)
    const imgElement = card.querySelector('img');
    const altText = (imgElement && imgElement.getAttribute('alt')) ? imgElement.getAttribute('alt').toLowerCase() : '';
    // Fetch Image Filename (safe fallback: if attribute is missing/null, use empty string '')
    const filenameText = (card.getAttribute('data-filename') || '').toLowerCase();
    // Fetch Card's Classes
    const classText = card.className.toLowerCase();
    // Evaluate Matches
    if (
      figcaptionText.includes(searchTerm) || 
      altText.includes(searchTerm) || 
      filenameText.includes(searchTerm) || 
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
