import {songs} from '../data/songs.js'

const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultsContainer");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const matchingSongs = songs.filter(song => {
    return (
      song.songTitle.toLowerCase().includes(searchTerm) ||
      song.artist.toLowerCase().includes(searchTerm)
    );
  });

  displayResults(matchingSongs);
});

function displayResults(results) {
  resultsDiv.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.classList.add("hidden");
    return;
  }

  resultsContainer.classList.remove("hidden");

  results.forEach(song => {
    const resultItem = document.createElement("div");
    resultItem.innerHTML = `<p>${song.songTitle} - ${song.artist}</p>
                            `;

    resultsDiv.appendChild(resultItem);
  });
}
