
const toggleBtn=document.querySelector(".sidebar-toggle");
const closeBtn=document.querySelector(".close-btn");
const sidebar=document.querySelector(".sidebar");
toggleBtn.addEventListener("click",function(){

    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");

    }else{
        sidebar.classList.add("show-sidebar");

    }

    //sidebar.classList.toggle("show.sidebar");

});

closeBtn.addEventListener('click',function(){
    
    sidebar.classList.remove("show-sidebar");
})

window.addEventListener("DOMContentLoaded",function(){
    let ancho=window.screen.width;
    let body=this.document.getElementsByTagName("body")[0];
    //body.style.opacity="1";

    
    if(ancho <= 800 ){

    }
})


let body=this.document.getElementsByTagName("body")[0];
let header=this.document.getElementsByTagName("header")[0];

body.style.opacity="1.0";

let div=this.document.createElement('div');
div.classList.add("loading");

let span=this.document.createElement("span");
span.textContent="Onichan :V  ...";
span.style.color="red";
div.append(span);
body.append(div);
header.style.opacity="0.0";

setTimeout( function(){

div.classList.remove("loading");
div.removeChild(span);
header.style.opacity="1.0";
}  ,3000);


window.addEventListener('load',function(){
   


})