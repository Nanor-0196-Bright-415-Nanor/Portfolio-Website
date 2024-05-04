  

   

 
 const twos = document.querySelectorAll(".two");
 const ones = document.querySelectorAll(".one");
 const defaultDispla = document.querySelector(".default-display");

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







  