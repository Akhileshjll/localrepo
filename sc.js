let btn=document.querySelector("#b1");
let currMode="light";
btn.addEventListener("click",()=>{
    console.log("u r trying to change mode");
    if(currMode == "light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
});
