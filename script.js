let suniconnill=document.querySelector(".suniconnill");
let mooniconnill=document.querySelector(".mooniconnill");
let toggleBtn=document.querySelector("#toggleBtn");
let reviewouterdiv=document.querySelector("#reviewouterdiv");
let peoplediv=document.querySelectorAll(".peoplediv");
let footer=document.querySelector("footer");
let mooniconBtn=document.querySelector("#mooniconBtn");

let mood="dark"
mooniconBtn.style.display="none"
toggleBtn.addEventListener("click",function(){
    if(mood==="dark"){
        suniconnill.classList.add("suniconnill");
        mooniconnill.classList.remove("mooniconnill");
        mooniconnill.style.color = "white";

        document.body.style.backgroundColor="white";

        reviewouterdiv.style.backgroundColor = "white";
        reviewouterdiv.style.color = "black";

        mooniconBtn.style.display="block";

        peoplediv.forEach(function(item){
            item.classList.add("peoplediv");
            item.classList.remove("peopledivchange");
        });

        footer.style.backgroundColor="white";
        footer.style.color="black";

        mood="light";

    }else{
        mooniconnill.classList.add("mooniconnill");
        suniconnill.classList.remove("suniconnill");
        suniconnill.style.color="white";

        document.body.style.backgroundColor="black";

        reviewouterdiv.style.backgroundColor = "black";
        reviewouterdiv.style.color = "white";

        peoplediv.forEach(function(item){
            item.classList.add("peopledivchange");
            item.classList.remove("peoplediv");
        });

        footer.style.backgroundColor="black";
        footer.style.color="white";

        mood="dark"
    }
});

let leftsideBtn=document.querySelector("#leftsideBtn");
let rightsideBtn=document.querySelector("#rightsideBtn");
let secondheadsetdiv=document.querySelector("#secondheadsetdiv");
let originalprice=document.querySelector("#originalprice");

let leftsideimage = document.querySelector("#leftsideimage");
let centertypeimage = document.querySelector("#centertypeimage");
let rightsideimg = document.querySelector("#rightsideimg");

let photos=[
    "blackHeadset.png",
    "BlueHeadset.png",
    "GreenHeadset.png",
    "RedHeadset.png",
    "yellowheadset.png",
];

let colors=[
    "#757575",
    "#007BFF",
    "#28A745",
    "#DC3545",
    "#ffbb01"
];

let textcolorname=[
    ' "Black"',
    ' "Blue"',
    ' "Green"',
    ' "Red"',
    ' "Orange"'
];

let count=0;

rightsideBtn.addEventListener("click",function(){
    count++;
    if(count>=photos.length){
        count=0;
    }
    leftsideimage.style.backgroundImage=`url("${photos[count]}")`;
    centertypeimage.style.backgroundImage =`url("${photos[(count+1)%photos.length]}")`;
    rightsideimg.style.backgroundImage =`url("${photos[(count+2)%photos.length]}")`;

    secondheadsetdiv.style.backgroundImage=`url("${photos[(count+1)%photos.length]}")`;
    originalprice.style.color=colors[(count+1)%colors.length];
    buynow.style.backgroundColor=colors[(count+1)%colors.length];

});

leftsideBtn.addEventListener("click",function(){
    count--;
    if(count<0){
        count=photos.length-1;
    }
    leftsideimage.style.backgroundImage = `url("${photos[count]}")`;
    centertypeimage.style.backgroundImage = `url("${photos[(count + 1) % photos.length]}")`;
    rightsideimg.style.backgroundImage = `url("${photos[(count + 2) % photos.length]}")`;

    secondheadsetdiv.style.backgroundImage=`url("${photos[(count+1)%photos.length]}")`;
    originalprice.style.color=colors[(count+1)%colors.length];
    buynow.style.backgroundColor=colors[(count+1)%colors.length];

});

let listitems=document.querySelector("#listitems");
let itemcount=document.querySelector("#itemcount");
let addtocartcount=document.querySelector(".addtocartcount");
let items=0;
addtocartcount.style.display="none";
listitems.addEventListener("click",function(){
    items++;
    addtocartcount.style.display="block"
    itemcount.innerText=items;

});

let backtotop=document.querySelector("#backtotop");
backtotop.addEventListener("click",function(){
    window.location.href="index.html"
});

let shownowBtn=document.querySelector("#shownowBtn");
    shownowBtn.addEventListener("click",function(){
    window.location.href="../mello-landing/landing index.html";
});

let buynowBtnredict=document.querySelector("#buynowBtnredict")
 buynowBtnredict.addEventListener("click",function(){
    window.location.href="../mello-landing/landing index.html";
 });