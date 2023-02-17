let btnToggle = document.querySelector(".header-btn");

btnToggle.addEventListener("click" , function(){
    let nav= document.querySelector(".navbar");
    nav.style.transform = "translate(100%, 0px)"; 
    let headOverlay = document.querySelector(".header-overlay");
    headOverlay.style.left = "0"
    headOverlay.addEventListener("click" , function(){
        if(headOverlay.style.left = "0"){
            headOverlay.style.left = "-100%";
             nav.style.transform = "translate(-100%, 0px)";  

        }
    })
})


// ##################

const showOnPx = 100;

const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
    document.querySelector(".animation_item").style.transform ="translate(0% , 0%)";
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);



// ############# make search_icon##########

// let searchIcon = document.querySelector(".header-icone .search_icon");


// function poppElement(){
//   document.body.style.background = "#000";
// }
// searchIcon.addEventListener("click" , function(){
//   console.log("mohamed")
//   // document.body.style.background = "red";
// });