let counth=0
let countg=0
function h1(){
    counth+=1
    document.getElementById("res").textContent=counth
}

function h2(){
    counth+=2
    document.getElementById("res").textContent=counth
}

function h3(){
    counth+=3
    document.getElementById("res").textContent=counth
}






function g1(){
    countg+=1
    document.getElementById("resg").textContent=countg
}

function g2(){
    countg+=2
    document.getElementById("resg").textContent=countg
}

function g3(){
    countg+=3
    document.getElementById("resg").textContent=countg
}





function again(){
    let aga=0
    document.getElementById("res").textContent=aga
    document.getElementById("resg").textContent=aga
    countg=0
    counth=0
}