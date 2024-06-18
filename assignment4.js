let button=document.getElementsByClassName("portfolio_nav_link");
let card=document.querySelectorAll(".portfolio_main_one > div");


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
    
}


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

