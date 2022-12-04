let burger=document.getElementsByClassName("burgerOpen");
let burgerButton=document.getElementsByClassName("burger");
let mainTag=document.getElementsByTagName("main");
let backGroundGrey = document.getElementsByClassName("bc-grey");


async function openBurger(){
   
    await burger ;
    await burgerButton;
    await backGroundGrey;
 
burgerButton[0].addEventListener("click", (event) =>{
  
   burger[0].style.display="flex";
   backGroundGrey[0].style.display="flex";
    
})
}
function checkScreen(){
  
        burger[0].style.display="none";
        backGroundGrey[0].style.display="none";
    
}
 window.onload =  (event) => {
      openBurger();
     closeBurger();
        };


       window.addEventListener("resize",(event)=>{
        console.log(event.target.value)
        checkScreen();
        })

 function closeBurger(){
    backGroundGrey[0].addEventListener("click",(event)=>{
            burger[0].style.display="none";
            backGroundGrey[0].style.display="none";
    })

    burger[0].addEventListener("click",(event)=>{
        burger[0].style.display="none";
        backGroundGrey[0].style.display="none";

    })

}

