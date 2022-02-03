const THRESHOLD = 15

const reduce = 235

            

function handleMove(e){

    if(window.innerWidth < 950){

    }else{
        var calc = 620
        if(window.innerHeight > 950){
            if(e.target.parentNode.parentNode.classList.contains("item")){
                const { clientX, clientY, currentTarget } = e;
                const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
        
                const horizontal = (clientX - offsetLeft) / clientWidth;
                const vertical = (clientY - offsetTop) / clientHeight;
        
                const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
                const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
                e.target.parentNode.parentNode.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY - reduce}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
                // gsap.to(e.target.parentNode, {rotationX: rotateY - 300, rotationY: rotateX, perspective: clientWidth, scaleX: 1, scaleY: -1, scaleZ: -1})
            }else{
                if(e.target.parentNode.classList.contains("item")){
                    const { clientX, clientY, currentTarget } = e;
                    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
        
                    const horizontal = (clientX - offsetLeft) / clientWidth;
                    const vertical = (clientY - offsetTop) / clientHeight;
        
                    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
                    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
                    e.target.parentNode.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY - reduce}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
                }else{
                    if(e.target.classList.contains("item")){
                        const { clientX, clientY, currentTarget } = e;
                        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
        
                        const horizontal = (clientX - offsetLeft) / clientWidth;
                        const vertical = (clientY - offsetTop) / clientHeight;
        
                        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
                        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
                        e.target.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY - reduce}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;      
                        // gsap.to(e.target, {rotationX: rotateY - 300, rotationY: rotateX, perspective: clientWidth, scaleX: 1, scaleY: -1, scaleZ: -1})
                    }
                }
            }
        }
    }

    

}

function resetStyle(e){
    e.target.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

const items = document.querySelectorAll(".item")

if (!motionMatchMedia.matches) { 
    items.forEach(element => {
        element.addEventListener("mousemove", handleMove);
        element.addEventListener("mouseleave", resetStyle);
    })
}