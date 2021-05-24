const load = document.querySelector(".load");

document.body.onload = ()=>{
    load.classList.add("remove");

}


function VideoToggle(){
    var video = document.querySelector(".video");
    video.classList.toggle("active")
    videoSrc.play();
}

function CloseVideoToggle(){
    var video = document.querySelector(".video");
    video.classList.remove("active")
    videoSrc.stop();
}

const video = document.querySelector(".video");
const videoSrc = document.querySelector(".video video");

video.addEventListener("click", (e) =>{
   if(e.target != videoSrc){
       video.classList.remove("active")
       videoSrc.pause();
   }
})

// form
const form = document.querySelector("form");
const formInputCrush = document.querySelector("input.crush");
const formInputyt = document.querySelector("input.yt");
const formInputno = document.querySelector("input.no");
const btn = document.querySelector("form button");
const ans = document.querySelector(".ans");
const ansText = document.querySelector(".ans p");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    SentacePlay();
})

function SentacePlay(){
    const crush = formInputCrush.value;
    const yt = formInputyt.value;
    const numb = formInputno.value;

    const sentace = `Well ${crush} hates you and has totally blocked ${yt} channel on Yotube and to look closely
    what is this, ${numb}!! what a little pervy shit you are`;

    form.classList.add("hide");
    ans.classList.add("show");
    ansText.innerText = sentace;
}

// typing

var typed = new Typed(".type", {
    strings:["You", "Me", "PP", "mind", "Shrit"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});