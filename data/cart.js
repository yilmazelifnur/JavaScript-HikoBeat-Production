export let cart = [] ;

export function addToCart(songId){

  cart.forEach((cartItem)=>{
    if(songId === cartItem.songId){
        matchingItem= cartItem;
    }

  });

    cart.push({
      songId: songId,    
    });


   
}
