export let cart = [{
  songId :'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  songName : 'Grooving Infinity',
  
},{
  songId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  songName: 'Purple Night',
  
}] ;

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
