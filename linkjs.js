const n=document.getElementById("name");
const url=document.getElementById("linkk");
const down=document.getElementById("display");
const c=document.getElementById("closeall");

//if(down.children.length===0){
//   c.style.display="none";
//}
//else{
//    c.style.display="inline-block";
//}
function clr(){
    down.remove();
    localStorage.removeItem("data");
}
function sub(){
    
    let a=document.createElement("a");
    a.innerHTML=n.value;
    a.href=url.value;
    down.appendChild(a);
    //n.value="";
    url.value="";
    save(); 
}
function save(){
     localStorage.setItem("data",down.innerHTML);
}
function show(){
     down.innerHTML=localStorage.getItem("data");
}

show(); 