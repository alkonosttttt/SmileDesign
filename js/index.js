
//1) for all html files
function menu() {
    document.getElementById("nav").classList.toggle('active');
}



// 2) for services.html
document.querySelectorAll('.accordionQuestion').forEach((item)=>
    item.addEventListener('click',() => {
        const parent = item.parentNode;
        parent.classList.toggle('accordionBlock');
        parent.classList.toggle('accordionNone');
    })
)


//3) for about.html
let videoButton = document.querySelector('.js-video-btn');
let video = document.querySelector('.js-video');

//start video
videoButton.onclick = function () {
    video.play();
    this.classList.add('hide');
}

//pause
video.onclick = function () {
    if(this.paused) {
        this.play();

    }
    else {
        this.pause();
        videoButton.classList.remove('hide');
    }
}


//stop
video.addEventListener('ended', videoHandler, false);

function videoHandler() {
    videoButton.classList.remove('hide');
}
