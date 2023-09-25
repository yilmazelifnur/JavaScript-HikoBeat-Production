export function playMusic() {
    let audio = document.getElementById("music");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  export function formatCurrency(priceCents){
    return  (priceCents/100).toFixed(2);
   }