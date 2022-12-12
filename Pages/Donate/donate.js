let burger=document.getElementsByClassName("burgerOpen");
let burgerButton=document.getElementsByClassName("burger");
let mainTag=document.getElementsByTagName("main");
let backGroundGrey = document.getElementsByClassName("bc-grey");
let animalCards= document.querySelectorAll(".cardImg");

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
    validateInput();
    highlightcircle();
    closeBurger();
  };
function validateInput(){
    let inputAmount = document.getElementById("inputAmount");
    inputAmount.addEventListener("keydown", (event)=>{
        if(inputAmount.value.length>3){
            inputAmount.style.background="red";
            
        }else{
            inputAmount.style.background="green";
        }
    })
}


function highlightcircle(){
    let inputAmount = document.getElementById("inputAmount");
    let getCircle = document.getElementsByName("amount");
    getCircle.forEach(x=>{
        x.addEventListener("click", (event)=>{
        let y = x.nextElementSibling.innerHTML; 
        let z = y.substring(1,y.length);
        let amount = parseInt(z);
     //inputAmount.innerHTML="";
     inputAmount.value=amount;
                 
        })

    })
}


function closeBurger(){
    let closeBtnBurger = document.getElementsByClassName("close");
    backGroundGrey[0].addEventListener("click",(event)=>{
            burger[0].style.display="none";
            backGroundGrey[0].style.display="none";
    })

    burger[0].addEventListener("click",(event)=>{
        burger[0].style.display="none";
        backGroundGrey[0].style.display="none";

    })
    closeBtnBurger[0].addEventListener("click",(event)=>{
        burger[0].style.display="none";
        backGroundGrey[0].style.display="none";

    })
 

}
