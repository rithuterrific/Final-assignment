
let slideindex = 1;
showslides(slideindex);
function slidernext(n) {
  showslides(slideindex += n);
  }
function currentslide(n) {
  showslides(slideindex = n);
  }

function showslides(n) {
  let i;
  let slides = document.getElementsByClassName("slider_image");
  if (n > slides.length) {
    slideindex = 1
  }    
  if (n < 1) {
    slideindex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideindex-1].style.display = "block";  
  }
function getvalue(){
  const url= new URL('http://api.zippopotam.us/us/90210');
  const newurl= url.pathname.split('/');
  newurl[2] = document.getElementById("pstcod").value;
  newurl[1]= document.getElementById("country_name").value;
  url.pathname = newurl.join('/');
  loaddata(url);
}

async function loaddata(url){
  const response= await fetch(url);
  const data= await response.json();
  
}

