
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
  function getrange(){
    let range = document.getElementById("country_name").value;
    if(range =='in'){
      document.getElementById("range_text").innerHTML = '(Range: 110001 - 855126)';
  }
    if(range =='us'){
    document.getElementById("range_text").innerHTML = '(Range: 00210 - 99950)';
  }
   if(range =='au'){
    document.getElementById("range_text").innerHTML = '(Range: 0200 - 9726)';
  }
    if(range =='de'){
    document.getElementById("range_text").innerHTML = '(Range: 01067 - 99998)';
  }
  if(range =='hu'){
    document.getElementById("range_text").innerHTML = '(Range: 1011 - 9985)';
  }
  if(range =='no'){
    document.getElementById("range_text").innerHTML = '';
  }
  
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
  try{const response= await fetch(url);
  const data= await response.json();
  if(response.ok){
  inserttable(data);
}
else{
  throw error;
}
}
catch (error){
  alert("wrong input");
  let inp = document.getElementById("table_data");
  inp.style.display="none";
}
}
function inserttable(data){
  let tab_val = document.getElementById("table_data");
  var temp ="";
  temp += "<td>" + data.places[0]["place name"] + "</td>";
  temp += "<td>" + data.places[0].longitude + "</td>";
  temp += "<td>" + data.places[0].state + "</td>";
  temp += "<td>" + data.places[0]["state abbreviation"] + "</td>";
  temp += "<td>" + data.places[0].latitude + "</td>";
  document.getElementById("table_input").innerHTML = temp;
  tab_val.style.display = "table";  

}
