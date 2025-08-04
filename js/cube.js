// 아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector("#circle");
// 태그명이 article인 요소들을 찾아서 저장
const article = document.querySelectorAll("article");

for(let el of article){
    el.addEventListener("mouseenter",e=>{
        circle.style.animationPlayState="paused";
        //article에 마우스를 올리면 부모인 #circle의 animation-play-state값을 paused로 변경
    });
    el.addEventListener("mouseleave",e=>{
        circle.style.animationPlayState="running";
        //마우스가 벗어나면 부모인 #circle의 animation-play-state값을 running으로 변경
    });
}