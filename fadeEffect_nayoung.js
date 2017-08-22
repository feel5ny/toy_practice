// css 컨크롤용 JS
const fadeImg = document.getElementById("fadeCss");
const fadeInBtn = document.getElementById("fadeInBtn_css");
const fadeOutBtn = document.getElementById("fadeOutBtn_css");

function fadeIn(){
  fadeImg.style.opacity = 1;
  // alert("he");
};
function fadeOut(){
  fadeImg.style.opacity = 0;
};

fadeInBtn.addEventListener("click",fadeIn);
fadeOutBtn.addEventListener("click",fadeOut);

//Pure JS
