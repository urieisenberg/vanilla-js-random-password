const display = document.querySelector("input"),
button = document.querySelector("button"),
copyBtn = document.querySelector("span.far"),
copyActive = document.querySelector("span.fas");

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

button.onclick=()=>{
    let i,
    randomPass = "";
    copyBtn.style.display = "block";
    copyActive.style.display = "none";
    for(i=0;i<16;i++){
        randomPass = randomPass + chars.charAt(
            Math.floor(Math.random()*chars.length)
        );
    }
    display.value = randomPass;
}


function copy (){
    copyBtn.style.display = "none";
    copyActive.style.display = "block";
    display.select();
    document.execCommand("copy");
}