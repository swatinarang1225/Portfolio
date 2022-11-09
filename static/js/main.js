const backtotopbutton = document.querySelector("#to-top");
const sections = document.querySelectorAll("section");
const nava = document.querySelectorAll(".container nav .right a")


window.addEventListener("scroll",scrollFunction);

 function scrollFunction(){
     if( window.pageYOffset >20){
         backtotopbutton.style.display = "block";
     }
     else{
         backtotopbutton.style.display = "none";
     }
 }

backtotopbutton.addEventListener("click",backtotop);

function backtotop(){
    window.scrollTo({top:0,behavior:'smooth'});
}
// ************************************* Read More Function  ***************************
function myReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myReadMore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      btnText.style.color = "blue";
     
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      btnText.style.color = "blue" 
      moreText.style.display = "inline";
    }
  }
  function myReadMore2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myReadMore2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      btnText.style.color = "blue";
     
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      btnText.style.color = "blue" 
      moreText.style.display = "inline";
    }
  }
  function myReadMore3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myReadMore3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      btnText.style.color = "blue";
     
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      btnText.style.color = "blue" 
      moreText.style.display = "inline";
    }
  }


 

