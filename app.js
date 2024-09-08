document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    searchGifs(query);
});

function searchGifs(query) {
    const apiKey = 'p8K8Ka7ffqI5sjl0Y2J1Ljkj2oFRJQll'; // Replace with your Giphy API Key
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10&rating=g`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const gifContainer = document.getElementById('gif-container');
            gifContainer.innerHTML = ''; // Clear previous results
            data.data.forEach(gif => {
                const gifItem = document.createElement('div');
                gifItem.classList.add('gif-item');
                gifItem.innerHTML = `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`;
                gifContainer.appendChild(gifItem);
            });
        })
        .catch(error => {
            console.error('Error fetching GIFs:', error);
        });
}
