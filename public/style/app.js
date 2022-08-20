// const { response } = require("express");

console.log("file loaded");
const weatherForm=document.querySelector("form");
const input=document.querySelector(".input")
const msg1=document.querySelector(".msg-1");
const msg2=document.querySelector(".msg-2");

weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    msg1.textContent="content loading......."
    const location=input.value;
    fetch(`/weather?address=${location}`).then((res)=>{
    res.json().then((data)=>{
      if(data.error)
      {
        msg1.textContent=data.error
        msg2.textContent=""
      }
      else{
          msg1.textContent=data.location;
          msg2.textContent=data.conditon;

      }
    }
)})
})