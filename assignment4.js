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







let button=document.querySelectorAll(".portfolio_nav_link");
let card=document.querySelectorAll(".portfolio_main_one > div");

/*
for(let j=0;j<button.length;j++){
    button[j].addEventListener("click",function (){
        button[j].style.textDecoration="underline";
        button[j].style.color="rgb(32, 201, 151)";
        for(let k=0;k<button.length;k++){
            if(k!=j){
                button[k].style.textDecoration="none";
                button[k].style.color="white";
            }
        }
    })
}*/

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
        card[4].style.display="block";

        for(let i = 0; i < card.length; i++){
            if(i!=0 && i!=4){
                card[i].style.display="none";
            }
        }
})
button[2].addEventListener("click",function (){
  
    card[1].style.display="block";
    card[2].style.display="block";

    for(let i = 0; i < card.length; i++){
        if(i!=1 && i!=2){
            card[i].style.display="none";
        }
    }
})
button[3].addEventListener("click",function (){
  
    card[3].style.display="block";
    card[5].style.display="block";

    for(let i = 0; i < card.length; i++){
        if(i!=3 && i!=5){
            card[i].style.display="none";
        }
    }
})

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
