const links =document.querySelector(".links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", function(e){
   if(e.target.classList.contains("fa-bars")){
    links.style.left ="0px";
    e.target.parentNode.innerHTML = "<i class='fa-solid fa-xmark'></i> "
   } 

   if(e.target.classList.contains("fa-xmark")){
    links.style.left ="-100%";
    e.target.parentNode.innerHTML ="<i class='fa-solid fa-bars'></i>"
   }

})

// ---------------------------------------------

// RANDOM COLOR GENERATOR
// RED, GREEN, BLUE 0--255


let body = document.body;
let mid = document.querySelector(".mid")
let link = document.querySelector(".links a");
let btn = document.querySelector("button");

function RandomColorGenerator() {
    let red = Math.floor(Math.random() * 256); // 0 to 255 inclusive
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let ColorValue = `rgb(${red}, ${green}, ${blue})`;
    console.log(ColorValue);
    body.style.backgroundColor = ColorValue;
    
    mid.innerText = ColorValue;
    mid.style.position= "fixed"
    mid.style.bottom ="60px"
}

// Set interval to 1 second (1000 milliseconds)
const id = setInterval(RandomColorGenerator, 1000);

btn.addEventListener("click", function() {
    clearInterval(id);
});


// -------------------------------
// callback hell
// payramid of doom
let home = document.querySelector(".home")
let about = document.querySelector(".about")
let services = document.querySelector(".services")
let contact = document.querySelector(".contact")


 setTimeout(()=>{
      home.style.color ="red"
 } , 1000)

 setTimeout(()=>{
     about.style.color ="blue"
 } , 2000)

 setTimeout(()=>{
     services.style.color ="green"
 } , 3000)

 setTimeout(()=>{
     contact.style.color ="red"
 } , 4000)


// callback hell


 setTimeout(()=>{
         home.style.color ="red"
         setTimeout(()=>{
            about.style.color ="black"
          setTimeout(()=>{
             services.style.color ="green"
             setTimeout(()=>{
                 contact.style.color ="blue"
             }, 1000)
          }, 1000)
         }, 1000)
     } , 1000)


//   payramid of dom


 function stepWiseColorChange(element , color , time , text , cb){
     element.style.color = color
     element.innerText = text
     setTimeout(cb, time)
 }

 stepWiseColorChange(home , "red" , 1000 , "Home" , ()=>{
     stepWiseColorChange(about , "blue" , 2000 , "About" , ()=>{
         stepWiseColorChange(services , "green" , 3000 , "Services" , ()=>{
             stepWiseColorChange(contact, "blue" , 4000 , "Contact" , ()=>{
             })
         })
     })
 })









