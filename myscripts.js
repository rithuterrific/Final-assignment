let er = document.getElementById("wrng_inpt");
er.style.display="none";
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
  er.style.display="none";
  inserttable(data);
}
else{
  throw error;
}
}
catch (error){
  er.style.display="inline"
  let inp = document.getElementById("table_data");
  inp.style.display="none";
}
}
function inserttable(data){
  let tab_val = document.getElementById("table_data");
  var temp ="";
  for (let i = 0; i < data.places.length; i++) 
  {
  temp +="<tr>"
  temp += "<td>" + data.places[i]["place name"] + "</td>";
  temp += "<td>" + data.places[i].longitude + "</td>";
  temp += "<td>" + data.places[i].state + "</td>";
  temp += "<td>" + data.places[i]["state abbreviation"] + "</td>";
  temp += "<td>" + data.places[i].latitude + "</td>";
  temp +="</tr>"
}
  document.getElementById("table_input").innerHTML = temp;
  tab_val.style.display = "table";  

}

