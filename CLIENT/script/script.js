function loadEvent() {
    console.log("Your website is loaded.")

    function toggleGiftBox(){
        console.log("Function working.")
        let giftWrapper = document.getElementById("giftWrapper");
        giftWrapper.classList.toggle("close")
        giftWrapper.style.transition = 'all 3s ease-in-out;'
        giftWrapper.style.backgroundColor = 'red'
/*         console.log(giftWrapper)
        if(giftWrapper.classList.contains("gift-wrapper"))
        {
            giftWrapper.classList.add("open")
            giftWrapper.classList.remove("close")
        }
        else 
        {
            giftWrapper.classList.add("close")
            giftWrapper.classList.remove("open")
        } */
    }

    let gift = document.getElementById("giftButton");
    gift.addEventListener("click", toggleGiftBox)
    
  
};
window.addEventListener('load', loadEvent);