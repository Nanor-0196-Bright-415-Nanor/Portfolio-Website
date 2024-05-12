  

   

 
 const twos = document.querySelectorAll(".two");
 const ones = document.querySelectorAll(".one");
 const defaultDispla = document.querySelector(".default-display");
 const ulSide = document.getElementById("ulSide");
 const menu = document.querySelector(".fa-bars");
 const clse = document.querySelector(".fa-xmark")

  ones.forEach(function(one){
    one.addEventListener("click",function(){
      twos.forEach(function(two){
       two.style.display = "none";
      })
      const meDia = document.getElementById(this.id + "-set");
      setTimeout(()=>{
        defaultDispla.textContent = "";
        meDia.style.display = "inline";
      },100)
     
    })
  });

//Side bar
//menu click
menu.addEventListener("click",function eme(){
  ulSide.style.width = "100px";
})

//Cross Click

clse.addEventListener("click", function leks(){
  ulSide.style.width = "0px";
})




  