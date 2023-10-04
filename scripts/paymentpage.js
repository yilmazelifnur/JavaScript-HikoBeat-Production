import { cart} from "../data/cart";
import { songs } from "../data/songs";
import { formatCurrency } from "../data/functions";

const songId = localStorage.getItem('songId');
let cartSummaryHTML = '';

cart.forEach((cartItem)=>{
  const songId=cartItem.songId;
  
let matchingSong;
  songs.forEach((song)=>{
    if(song.Id===songId){
      matchingSong= song;
    }
  });


  cartSummaryHTML += `div class="box box-order">
    <div class="order-detail">
      <div class="song-image-container">
        <img class="song-image" src="${matchingSong.coverImage}" data-id="${matchingSong.id}" >
      </div>
      <div class="song-name limit-text-to-2-lines">
        ${matchingSong.songTitle}
      </div>
      <div class="song-price">
      $${formatCurrency()}
      </div>
    </div>
  </div>`

});