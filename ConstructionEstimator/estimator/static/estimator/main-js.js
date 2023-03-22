 //javascript of responsive navigation menu

 const menuBtn = document.querySelector(".menu-btn");
 const navigation = document.querySelector(".navigation");


 menuBtn.addEventListener("click", () => {
     menuBtn.classList.toggle('active');
     navigation.classList.toggle('active');
 })

//javascript for image slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");


var sliderNav = function(manual){
btns.forEach((btn) => {
 btn.classList.remove('active');
} 
);

slides.forEach((slide) => {
 slide.classList.remove('active');
} 
);

contents.forEach((content) => {
 content.classList.remove('active');
} 
);

btns[manual].classList.add("active");
slides [manual].classList.add("active");
contents [manual].classList.add("active");
}


btns.forEach (( btn, i) => {
btn.addEventListener("click", () => {
 sliderNav(i)
}) 
});

//script for  sticky menu

let nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
} )

// :: Testimonial 

    let userTexts = document.getElementsByClassName("user-text");
    let userPics = document.getElementsByClassName("user-pic");


    function showReview(){
        for(userPic of userPics){
           userPic.classList.remove("active-pic"); 
     
        }

        for(userText of userTexts ){
            userText.classList.remove("active-text");
        }
        let i = Array.from(userPics).indexOf(event.target);

        userPics[i].classList.add("active-pic");
        userTexts[i].classList.add("active-text");

    }



// :: 3.0 Sliders Active Code

(function ($) {




}(jQuery));

