function ocultar(){
    document.getElementById("hide").classList.toggle ("oculto")
}

document.getElementById("boton").onclick = function(){
    ocultar();
}

function toyo(){
    document.getElementById("toyo").classList.remove ("hide")
    document.getElementById("color1").classList.add ("color")
    document.getElementById("historia").classList.add ("hide")
    document.getElementById("color2").classList.remove ("color")
    document.getElementById("mision").classList.add ("hide")
    document.getElementById("color3").classList.remove ("color")
    document.getElementById("vision").classList.add ("hide")
    document.getElementById("color4").classList.remove ("color")
}

function historia(){
    document.getElementById("toyo").classList.add ("hide")
    document.getElementById("color1").classList.remove ("color")
    document.getElementById("historia").classList.remove ("hide")
    document.getElementById("color2").classList.add ("color")
    document.getElementById("mision").classList.add ("hide")
    document.getElementById("color3").classList.remove ("color")
    document.getElementById("vision").classList.add ("hide")
    document.getElementById("color4").classList.remove ("color")
}

function mision(){
    document.getElementById("toyo").classList.add ("hide")
    document.getElementById("color1").classList.remove ("color")
    document.getElementById("historia").classList.add ("hide")
    document.getElementById("color2").classList.remove ("color")
    document.getElementById("mision").classList.remove ("hide")
    document.getElementById("color3").classList.add ("color")
    document.getElementById("vision").classList.add ("hide")
    document.getElementById("color4").classList.remove ("color")
}

function vision(){
    document.getElementById("toyo").classList.add ("hide")
    document.getElementById("color1").classList.remove ("color")
    document.getElementById("historia").classList.add ("hide")
    document.getElementById("color2").classList.remove ("color")
    document.getElementById("mision").classList.add ("hide")
    document.getElementById("color3").classList.remove ("color")
    document.getElementById("vision").classList.remove ("hide")
    document.getElementById("color4").classList.add ("color")
}

document.getElementById("boton1").onclick = function(){
    toyo();
}

document.getElementById("boton2").onclick = function(){
    historia();
}

document.getElementById("boton3").onclick = function(){
    mision();
}

document.getElementById("boton4").onclick = function(){
    vision();
}