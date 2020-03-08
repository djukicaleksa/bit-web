"use strict";
(function(){
    ////////////////////////////////////Selecting required nodes
    var mario=document.querySelector(".mario");
    var body=document.querySelector("body");
    var main=document.querySelector("main");

    var position=main.style.backgroundPositionX;//////////Selecting default bg position
    //////////////////////////////////// Handler Functions
    function handler1(event){
        if(event.keyCode===39){
        position-=10;
        main.style.backgroundPositionX = position+"px";
        mario.classList.add("movingRight");
    }
        if(event.keyCode===37){
            position+=10;
            main.style.backgroundPositionX=position+"px";
            mario.classList.add("movingLeft");
        }
        if(event.keyCode===38){
            mario.classList.add("jump");
        }

    }
    function handler2(event){
        if(event.keyCode===39){
            mario.classList.remove("movingRight");

        }
        if(event.keyCode===37){
            mario.classList.remove("movingLeft");
        }
        if(event.keyCode===38){
            mario.classList.remove("jump");
        }
    }
//////////////////////////////Adding event listeners
    body.addEventListener("keydown",handler1);
    body.addEventListener("keyup",handler2);






})();