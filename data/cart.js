
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [{
    songId :'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
     songName : 'Grooving Infinity',
  }, {
    songId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    songName: 'Purple Night',
  }];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(songId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (songId === cartItem.songId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      songId: songId  
    });
  }

  saveToStorage();


}
export function removeFromCart(songId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.songId !== songId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}


