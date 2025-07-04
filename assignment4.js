/*document.addEventListener("DOMContentLoaded", function () {
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

*/
new Typed("#typed", {
    strings: ["Frontend Developer","ML Enthusiast", "UI Designer", "Tech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });
 function closeNote() {
    const note = document.getElementById("splineNote");
    note.style.opacity = "0";
    note.style.transform = "translateY(-10px)";
    setTimeout(() => {
      note.style.display = "none";
    }, 300);
  }



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
