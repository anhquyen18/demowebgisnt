const mapButton = document.getElementById("map-button");
const mapMenu = document.getElementById("map-menu");
mapButton.addEventListener('click', () => {
    mapMenu.classList.toggle("active");
});

const search = document.querySelector('.search-button');
const searchBt = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');
const searchResult = document.querySelector('.address');

searchBt.addEventListener('click', () => {
    search.classList.toggle('active');
    searchResult.classList.remove('active');
});
searchInput.addEventListener('focus', () => {
    searchResult.classList.add('active');
});