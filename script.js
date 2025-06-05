let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");

let bgBox=document.getElementById("bgBox");
let copy=document.getElementById("copy");


let val1="#d0e4f8";
let val2="#09b0f7";

const getHexCode=()=>{
    let hex="0123456789abcdef";
    let colors="#";

    for(let i=0;i<6;i++){
        colors=colors+hex[Math.floor(Math.random()*16)];
    }

    return colors;
}

const handleButton1=()=>{
    val1=getHexCode();
    btn1.innerText=val1;
    btn1.style.backgroundColor=val1;
    bgBox.style.backgroundImage=`linear-gradient(to right,${val1},${val2})`;
    copy.innerText=`background-image: linear-gradient(to right,${val1},${val2});`;
}

const handleButton2=()=>{
    val2=getHexCode();
    btn2.innerText=val2;
    btn2.style.backgroundColor=val2;
    bgBox.style.backgroundImage=`linear-gradient(to right,${val1},${val2})`;
    copy.innerText=`background-image: linear-gradient(to right,${val1},${val2});`;
}

const handleButton3=()=>{
    navigator.clipboard.writeText(copy.innerText);
    alert("Code Copied Successfully!");
}

btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);
btn3.addEventListener("click",handleButton3);