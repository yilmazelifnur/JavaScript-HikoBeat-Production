import { cart,removeFromCart } from "../data/cart.js";
import { songs } from "../data/songs.js";
import { formatCurrency } from "../data/functions.js";




const orderSummaryDiv = document.querySelector('.box-order');

if (cart.length === 0) {

  orderSummaryDiv.innerHTML = '<p>Sepetiniz boş.</p>';
} else {

  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {

    const songId = cartItem.songId;

    const matchingSong = songs.find((song) => song.id === songId);

    if (matchingSong) {
      cartSummaryHTML += `
      <div class="order-detail js-cart-item-container-${matchingSong.id} ">
      <div class="song-image-container">
        <img class="song-image" src="${matchingSong.coverImage}" data-id="${matchingSong.id} ">
      </div>
      <div class="song-name">
        ${matchingSong.songTitle}
      </div>
      <div class="song-price">
        $${formatCurrency(matchingSong.priceCents)}
      </div>
      <button class="delete-from-cart-button js-delete-from-cart" data-song-id="${matchingSong.id}">Delete</button>
    </div>
    
      `;
    }
  });


  orderSummaryDiv.innerHTML = cartSummaryHTML;
}
document.querySelectorAll('.js-delete-from-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const songId = button.dataset.songId;
      const matchingSong = songs.find((song) => song.id === songId); 

      removeFromCart(songId);

      const container = document.querySelector(`.js-cart-item-container-${matchingSong.id}`);
      container.remove();
    });
  });









