import { cart } from "../data/cart.js";
import { songs } from "../data/songs.js";


let cartSummaryHTML='';

cart.forEach((cartItem)=>{
  const songId = cartItem.songId;

  let matchingSong;
  songs.forEach((song)=>{
    if(song.id === songId){
      matchingSong = song;
    }
  });

 


  cartSummaryHTML +=
   `<div class="order-detail">
    <div class="song-image-container">
      <img class="song-image" src="${matchingSong.coverImage}" data-id="${matchingSong.id}" >
      </div>
      <div class="song-name limit-text-to-2-lines">
       ${matchingSong.songTitle}
      </div>
      <div class="song-price">
       $${matchingSong.priceCents/100}
    </div>
    </div>
  
  
  `
})


document.querySelector('.box-order').innerHTML=cartSummaryHTML;