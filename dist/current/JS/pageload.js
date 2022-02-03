var scrollHint = document.getElementById("scrolldowntip");
var booScrlHntAct = false;
var booActivated = false;

const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");

if (scrollHint) {
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    if(!motionMatchMedia.matches){
        if (document.documentElement.scrollTop <= 5) {
                scrollHint.style.opacity = "1";
                scrollHint.style.pointerEvents = "all";
                booScrlHntAct = true;
            }
    }else{
        scrollHint.style.opacity = "0";
        scrollHint.style.pointerEvents = "none";
        booScrlHntAct = true;
    }
}

document.addEventListener('scroll', function (e) {
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    if(!motionMatchMedia.matches){
        if (booActivated == false) {
            if (document.documentElement.scrollTop >= 5) {
                if (scrollHint) {
                    booActivated = true;
                    scrollHint.style.opacity = "0";
                    scrollHint.style.pointerEvents = "none";
                    booScrlHntAct = false;
                }
            }
        }else{
            if(document.documentElement.scrollTop <= 5){
                booActivated = false;
                scrollHint.style.opacity = "1";
                scrollHint.style.pointerEvents = "all";
                booScrlHntAct = true;
            }
        }
    }else{

    }
});
