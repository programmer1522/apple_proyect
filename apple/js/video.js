const video = document.querySelector("video");
const btn = document.querySelector('.fa-pause');

let reproducir = true;

function playvideo(){
    reproducir = true;
    video.play();
}
function pausevideo(){
    reproducir = false;
    video.pause();
}

btn.addEventListener("click", ()=>{
    const btn_class = btn.className;
    switch(btn_class){
        case "fas fa-pause btn":
            btn.className = "fas fa-play btn";
            pausevideo();
        break;
        case "fas fa-play btn":
            btn.className = "fas fa-pause btn";
            playvideo();
        break;
    }
})
