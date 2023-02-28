function loadEvent() {
    console.log("dwadawdawdaw")
/*     function toggleGiftBox() {
        let gift = document.getElementById("giftWrapper");
       let giftButton = document.getElementById("giftButton"); 

        if (gift.classList.contains("closed")) {
            gift.classList.remove("closed")
            gift.classList.add("open")
           giftButton.classList.remove("button-closed") 
        }
        else if (gift.classList.contains("open")) {
            gift.classList.remove("open")
            gift.classList.add("closed")
           giftButton.classList.add("button-closed") 
        } 

    }
     */
    let giftButtons = document.getElementById("giftButton");
    giftButtons.addEventListener("click", console.log(giftButtons))

    
  
};
window.addEventListener('load', loadEvent);