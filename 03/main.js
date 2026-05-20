var alto=document.getElementById("alto");
var ancho=document.getElementById("ancho");
var color=document.getElementById("color");
var figura=document.getElementById("figura");
var radius=document.getElementById("radius")
var anchoborde=document.getElementById("anchoborde");
var colorborde=document.getElementById("colorborde");
var tipoborde=document.getElementById("tipoborde");
var hsombra=document.getElementById("hsombra");
var vsombra=document.getElementById("vsombra");
var anchosombra=document.getElementById("anchosombra");
var colorsombra=document.getElementById("colorsombra");

function actualizarSombra(){

    figura.style.boxShadow=
    hsombra.value+"px "+
    vsombra.value+"px "+
    anchosombra.value+"px "+
    colorsombra.value;

    document.getElementById("vhsombra").innerHTML=hsombra.value;

    document.getElementById("vvsombra").innerHTML=vsombra.value;

    document.getElementById("vanchosombra").innerHTML=anchosombra.value;
}


alto.oninput=()=>{
    figura.style.height=alto.value+"px";
    document.getElementById("valto").innerHTML=+alto.value;

}
ancho.oninput=()=>{
    figura.style.width=ancho.value+"px";
    document.getElementById("vancho").innerHTML=+ancho.value;
}
color.onchange=()=>{
figura.style.backgroundColor=color.value;
}
radius.oninput=()=>{
    figura.style.borderRadius=radius.value+"%";
    document.getElementById("vradio").innerHTML=radius.value;
}
anchoborde.oninput=()=>{
    figura.style.borderWidth=anchoborde.value+"px";
    document.getElementById("vanchoborde").innerHTML=+anchoborde.value;

}
colorborde.onchange=()=>{
    figura.style.borderColor=colorborde.value;
}
tipoborde.onchange=()=>{
    figura.style.borderStyle=tipoborde.value;
}
hsombra.oninput=()=>{
    actualizarSombra();
}

vsombra.oninput=()=>{
    actualizarSombra();
}

anchosombra.oninput=()=>{
    actualizarSombra();
}

colorsombra.onchange=()=>{
    actualizarSombra();
}