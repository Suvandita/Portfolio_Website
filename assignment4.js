document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".home_layer_wrap_text_name");
    const text = "I am Suvandita Swaroop";
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting && index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else if (isDeleting && index > 0) {
            textElement.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                isDeleting = !isDeleting;
                typeWriter();
            }, 100);
        }
    }

    typeWriter();
});



function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onscroll = function () {
    let backToTopButton = document.getElementById("backtotop");

    if (window.scrollY > 5) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("backToTop").style.display = "none";
});


/*
let button=document.querySelectorAll(".portfolio_nav_link");
let card=document.querySelectorAll(".portfolio_main_one > div");

button.forEach((j)=>{
    j.addEventListener("click",function (){
        j.style.textDecoration="underline";
        j.style.color="rgb(32, 201, 151)";
        button.forEach((k)=>{
            if(k!=j){
                k.style.textDecoration="none";
                k.style.color="white";
            }
        })
    })
})

button[0].addEventListener("click",function (){
    for(let i = 0; i < card.length; i++){
        card[i].style.display="block";
    }
})
button[1].addEventListener("click",function (){
  
        card[0].style.display="block";
        card[1].style.display="block";

        for(let i = 0; i < card.length; i++){
            if(i!=0 && i!=1){
                card[i].style.display="none";
            }
        }
})
button[2].addEventListener("click",function (){
  
    card[2].style.display="block";
    card[3].style.display="block";

    for(let i = 0; i < card.length; i++){
        if(i!=2 && i!=3){
            card[i].style.display="none";
        }
    }
})
button[3].addEventListener("click",function (){
  
    card[4].style.display="block";

    for(let i = 0; i < card.length; i++){
        if(i!=4){
            card[i].style.display="none";
        }
    }
})
*/

let nav_list=document.getElementsByClassName("top-nav_link")[0];
let nav_button=document.getElementsByClassName("top-nav_right2_button")[0];
let i=document.querySelector(".top-nav_right2_button i");
nav_button.addEventListener("click", function (){
    
    if(i.className=="fa fa-bars"){
        i.className="fa fa-times";
        nav_list.style.display="block";
    }
    else if(i.className=="fa fa-times"){
        i.className="fa fa-bars";
        nav_list.style.display="none";
    }

    
    
})


let nav_links=document.querySelectorAll(".top-nav_link li a");
nav_links.forEach((link) => {link.addEventListener("click",function (){
        nav_list.style.display="none";
        i.className="fa fa-bars";

    })}
)
