import { playMusic , formatCurrency } from "../data/functions.js";
import { songs } from "../data/songs.js";

let songsHTML= '';
   songs.forEach((song) => {
      songsHTML += `
        <div class="song-container">
          <div class="song-image-container">
            <img class="song-image" src="${song.coverImage}">
            
          </div>
          <div class="song-name limit-text-to-2-lines">
            ${song.songTitle}
          </div>
          <div class="song-price">
            $${formatCurrency(song.priceCents)}
          </div>
        </div>
      `;
    });

document.querySelector('.js-songs-grid').innerHTML =songsHTML;