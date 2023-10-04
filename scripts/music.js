import { formatCurrency } from "../data/functions.js";
import { songs } from "../data/songs.js";
import { cart , addToCart } from "../data/cart.js";


let audioPlayers = [
  new Audio("../musics/groovingInfinity.mp3"),
  new Audio("../musics/purpleNight.mp3"),
  new Audio("../musics/karma.mp3"),
  new Audio("../musics/giveawayBattle.mp3"),
  new Audio("../musics/sidhasitri.mp3")
];

audioPlayers.forEach(audio => {
  audio.volume = 0;
});



let songsHTML = '';
songs.forEach((song) => {
  songsHTML += `
    <div class="song-container">
      <div class="song-image-container">
        <img class="song-image" src="${song.coverImage}" data-id="${song.id}" >
      </div>
      <div class="song-name limit-text-to-2-lines">
        ${song.songTitle}
      </div>
      <div class="song-price">
        $${formatCurrency(song.priceCents)}
      </div>
      <button class="add-to-cart-button js-add-to-cart" data-song-id="${song.id}">
        Add to Cart
      </button>
      </div>
      
    </div>
    
  `;
});

document.querySelector('.js-songs-grid').innerHTML =songsHTML;


const songImages = document.querySelectorAll('.song-image');
const audioPlayer = {}; 

songImages.forEach((image) => {
  image.addEventListener('click', (event) => {

    const songId = event.target.getAttribute('data-id');
    if (songId !== null) {

      if (!audioPlayer[songId]) {
        audioPlayer[songId] = new Audio();
        audioPlayer[songId].src = songs.find((song) => song.id === songId).songUrl;
      }
      

      const audio = audioPlayer[songId];
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  });
});

document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
    button.addEventListener('click',()=>{
      const songId =button.dataset.songId;
      addToCart(songId);
      
    
    });
     

  });


