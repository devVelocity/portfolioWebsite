var scrollHint = document.getElementById("scrolldowntip")
var booScrlHntAct = false
var booActivated = false

if(scrollHint){
    if(document.documentElement.scrollTop <= 15){
        scrollHint.style.opacity = "1"
        scrollHint.style.pointerEvents = "all"
        booScrlHntAct = true
    }
}

document.addEventListener('scroll', (e) => {
    if(booActivated == false){
        console.log("e")
        if(document.documentElement.scrollTop >= 15){
            if(scrollHint){
                booActivated = true
                scrollHint.style.opacity = "0"
                scrollHint.style.pointerEvents = "none"
                booScrlHntAct = false
            }
        }
    }
})
