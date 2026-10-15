const micolor=document.getElementById("micolor");
const btnEliminar=document.getElementById("btnEliminar");

function recuperarColor() {
    let colorFondo=localStorage.getItem("colorFondo");
    if (colorFondo) {
        document.body.style.backgroundColor-colorFondo;
    }
}

micolor.addEventListener("input", ()=>{
    document.body.style.backgroundColor=micolor.value;
    localStorage.setItem("colorFondo", micolor.value);
});


btnEliminar.addEventListener("click",()=>{
    localStorage.clear();
    document.body.style.backgroundColor="white";
    document.querySelector(".mensaje").innerText="Datos Eliminados";
})


recuperarColor();