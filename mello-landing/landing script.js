let bluecolorBtn=document.querySelector(".bluecolorBtn");
let mainimgdiv=document.querySelector("#mainimgdiv");

let colorname=document.querySelector("#colorname");

window.addEventListener("DOMContentLoaded",function(){
    yellowcolorBtn.classList.add("yellowcolorBtnstage2");
    colorname.style.color="#ffc403"
});

bluecolorBtn.addEventListener("click",function(){
    mainimgdiv.style.backgroundImage="url('blue.png')";

    colorname.innerText='"Ocean Blue"';
    colorname.style.color="#004ffa"

    bluecolorBtn.classList.add("bluecolorBtnstage2");
    bluecolorBtn.classList.remove("bluecolorBtn");

    redcolorBtn.classList.add("redcolorBtn");
    redcolorBtn.classList.remove("redcolorBtnstage2");

    yellowcolorBtn.classList.add("yellowcolorBtn");
    yellowcolorBtn.classList.remove("yellowcolorBtnstage2");

    greencolorBtn.classList.add("greencolorBtn");
    greencolorBtn.classList.remove("greencolorstageBtn2");
});

let redcolorBtn=document.querySelector(".redcolorBtn");
redcolorBtn.addEventListener("click",function(){
    mainimgdiv.style.backgroundImage="url('redimage 435.png')";

    colorname.innerText='"Crimson Red"';
    colorname.style.color="#ea0000"

    redcolorBtn.classList.add("redcolorBtnstage2");
    redcolorBtn.classList.remove("redcolorBtn");

    bluecolorBtn.classList.remove("bluecolorBtnstage2");
    bluecolorBtn.classList.add("bluecolorBtn");

    yellowcolorBtn.classList.add("yellowcolorBtn");
    yellowcolorBtn.classList.remove("yellowcolorBtnstage2");

    greencolorBtn.classList.add("greencolorBtn");
    greencolorBtn.classList.remove("greencolorstageBtn2");

});

let yellowcolorBtn=document.querySelector(".yellowcolorBtn");
yellowcolorBtn.addEventListener("click",function(){
    mainimgdiv.style.backgroundImage="url('yellowimage.png')";

    colorname.innerText='"Royal Yellow"';
    colorname.style.color="#ffc403"
     
    yellowcolorBtn.classList.add("yellowdefault");
    yellowcolorBtn.classList.add("yellowcolorBtnstage2");
    yellowcolorBtn.classList.remove("yellowcolorBtn");

    bluecolorBtn.classList.remove("bluecolorBtnstage2");
    bluecolorBtn.classList.add("bluecolorBtn");

    redcolorBtn.classList.add("redcolorBtn");
    redcolorBtn.classList.remove("redcolorBtnstage2");

    greencolorBtn.classList.add("greencolorBtn");
    greencolorBtn.classList.remove("greencolorstageBtn2");
});

let greencolorBtn=document.querySelector(".greencolorBtn");
greencolorBtn.addEventListener("click",function(){
    mainimgdiv.style.backgroundImage="url('green.png')";

    colorname.innerText='"Emerald Green"';
    colorname.style.color="#087700"

    greencolorBtn.classList.add("greencolorstageBtn2");
    greencolorBtn.classList.remove("greencolorBtn");

    bluecolorBtn.classList.remove("bluecolorBtnstage2");
    bluecolorBtn.classList.add("bluecolorBtn");

    redcolorBtn.classList.add("redcolorBtn");
    redcolorBtn.classList.remove("redcolorBtnstage2");

    yellowcolorBtn.classList.add("yellowcolorBtn");
    yellowcolorBtn.classList.remove("yellowcolorBtnstage2");
});


let lessBtn=document.querySelector("#lessBtn");
let itemcountnum=document.querySelector("#itemcountnum");
let addBtn=document.querySelector("#addBtn");
let originalpricediv=document.querySelector("#originalpricediv");

let quantitycount=1;
let price=25.00;

addBtn.addEventListener("click",function(){
    quantitycount++;
    itemcountnum.innerText=quantitycount;
    originalpricediv.innerText="$"+(price*quantitycount).toFixed(2);
})

lessBtn.addEventListener("click",function(){
    quantitycount--;
    itemcountnum.innerText=quantitycount;
     originalpricediv.innerText="$"+(price*quantitycount).toFixed(2);
    if(quantitycount<2){
      originalpricediv.innerText="$25.00";
    }
    if(quantitycount<1){
        quantitycount=1
    }
    itemcountnum.innerText = quantitycount;
});

let buynowBtn=document.querySelector("#buynowBtn");
buynowBtn.addEventListener("click",function(){

    buynowBtn.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Placing Order...';

     setTimeout(function(){
        alert("Your order is confirmed");
        buynowBtn.innerHTML='<span class="material-symbols-rounded">shopping_bag</span> Buy now';
     },1200);

})

let backtotop=document.querySelector("#backtotop");
backtotop.addEventListener("click",function(){
    window.location.href="landing index.html"
});

