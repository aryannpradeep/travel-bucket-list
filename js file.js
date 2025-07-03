// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

// Mark as Visited Toggle
const visitedButtons = document.querySelectorAll('.card-content button');
visitedButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.textContent = button.textContent === 'Mark as Visited' ? 'Visited' : 'Mark as Visited';
        button.style.backgroundColor = button.textContent === 'Visited' ? '#28a745' : '#ff6a00';
    });
});

// Add Favorites Button
document.querySelectorAll('.card').forEach((card) => {
    const favoriteBtn = document.createElement('button');
    favoriteBtn.textContent = 'Add to Favorites';
    favoriteBtn.style.marginTop = '10px';
    favoriteBtn.style.backgroundColor = '#007bff';
    favoriteBtn.style.color = 'white';
    favoriteBtn.style.border = 'none';
    favoriteBtn.style.padding = '10px';
    favoriteBtn.style.cursor = 'pointer';
    favoriteBtn.style.borderRadius = '5px';
    favoriteBtn.addEventListener('click', () => {
        const destinationName = card.querySelector('h3').innerText;
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.includes(destinationName)) {
            favorites.push(destinationName);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert(`${destinationName} added to Favorites!`);
        } else {
            alert(`${destinationName} is already in Favorites.`);
        }
    });
    card.querySelector('.card-content').appendChild(favoriteBtn);
});

// Random Picker
document.getElementById('randomPicker').addEventListener('click', () => {
    const destinations = Array.from(document.querySelectorAll('.card h3')).map((el) => el.innerText);
    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
    alert(`How about visiting ${randomDestination}?`);
});

// Filter by Category
const categoryFilter = document.getElementById('categoryFilter');
categoryFilter.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        const category = card.getAttribute('data-category') || 'all';
        card.style.display = selectedCategory === 'all' || category === selectedCategory ? 'block' : 'none';
    });
});

// Weather Integration
document.getElementById('weatherBtn').addEventListener('click', () => {
    alert('Weather data integration is a planned feature!');
});

// Persistent Dark Mode
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

// Counter for Visited Destinations
let visitedCount = 0;
visitedButtons.forEach((button) => {
    button.addEventListener('click', () => {
        visitedCount += button.textContent === 'Visited' ? 1 : -1;
        document.getElementById('visitedCounter').textContent = `Visited: ${visitedCount}`;
    });
});
