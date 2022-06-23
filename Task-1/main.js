let act = document.querySelectorAll(".box");
let x = 0;

function start(){
    act[0].classList.add("on");
}



function cls(){
    act[0].classList.remove("on")
    act[1].classList.remove("on")
    act[2].classList.remove("on")
    act[3].classList.remove("on")
    act[4].classList.remove("on")
    act[5].classList.remove("on")


    act[0].classList.add("box")
    act[1].classList.add("box")
    act[2].classList.add("box")
    act[3].classList.add("box")
    act[4].classList.add("box")
    act[5].classList.add("box")
}

act.forEach(act => {
    act.addEventListener("click", () =>{

       cls();
       act.classList.add("on");
       
        
    })
})

start();

//------------------------------------------------------

let i = document.getElementsByClassName("the-head");
let s = document.getElementsByClassName("acc-content")

let aa=0;
let bb=0;
let cc=0;
let dd=0;
let ee=0;
let ff=0;

i[0].addEventListener("click", ()=> {
    if(aa == 0){
        s[0].style.display = "block";
        aa = aa + 1;
    }  
    else{
        s[0].style.display = "none";
        aa = aa - 1;
    }
})

i[1].addEventListener("click", ()=> {
    if(bb == 0){
        s[1].style.display = "block";
        bb = bb + 1;
    }  
    else{
        s[1].style.display = "none";
        bb = bb - 1;
    }
})

i[2].addEventListener("click", ()=> {
    if(cc == 0){
        s[2].style.display = "block";
        cc = cc + 1;
    }  
    else{
        s[2].style.display = "none";
        cc = cc - 1;
    }
})

i[3].addEventListener("click", ()=> {
    if(dd == 0){
        s[3].style.display = "block";
        dd = dd + 1;
    }  
    else{
        s[3].style.display = "none";
        dd = dd - 1;
    }
})

i[4].addEventListener("click", ()=> {
    if(ee == 0){
        s[4].style.display = "block";
        ee = ee + 1;
    }  
    else{
        s[4].style.display = "none";
        ee = ee - 1;
    }
})

i[5].addEventListener("click", ()=> {
    if(ff == 0){
        s[5].style.display = "block";
        ff = ff + 1;
    }  
    else{
        s[5].style.display = "none";
        ff = ff - 1;
    }
})




let elm = document.getElementById("elm");
let shift = 1;


function decider(){
    if(shift == 1){
        elm.style.backgroundImage = "url('./folio/energy.png')"
    }
    if(shift ==2){
        elm.style.backgroundImage = "url('./folio/online.png')"

    }
    if(shift ==3){
        elm.style.backgroundImage = "url('./folio/Gear.png')"

    }
}


function calculator(){

    if(shift == 4){
        shift = 1;
    }

    decider();
    

}


elm.addEventListener("click", ()=>{
    shift ++;
    calculator()
    
    
})

elm.style.backgroundImage = "url('./folio/energy.png')"









        
 


