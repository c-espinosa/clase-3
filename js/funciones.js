const micolor=document.getElementById("micolor");
const btnEliminar=document.getElementById("btnEliminar");

const nombre=document.getElementById("nombre");
const iniciar=document.getElementById("iniciar");

const opciones=document.getElementById("opciones");


function recuperarColor(){
    let colorFondo=localStorage.getItem("colorFondo");
    if(colorFondo){
        document.body.style.backgroundColor=colorFondo;
    }
}

micolor.addEventListener("input", () => {
    document.body.style.backgroundColor = micolor.value;
    localStorage.setItem("colorFondo",micolor.value);
});


iniciar.addEventListener("click", ()=>{
    const nombreIngresado = nombre.value.trim();

    if (nombreIngresado === "") {
        alert("Escribe tu nombre");
        return;
        
    }
    document.querySelector("h1").textContent=nombreIngresado;
    localStorage.setItem("nombre", nombreIngresado);
    nombre.value = "";
    document.querySelector("main").classList.remove("oculto");
})

btnEliminar.addEventListener("click", ()=>{
    const mensaje = document.querySelector(".mensaje");
    
    switch(opciones.value){
        case "1":
        localStorage.removeItem("nombre");
        document.querySelector("h1").textContent="Escribe tu nombre";
        nombre.value = "";
        mensaje.textContent="Nombre Eliminado";
        break;

        case "2":
        localStorage.removeItem("colorFondo");
        document.body.style.backgroundColor="";
        
        micolor.value="white";
        mensaje.textContent="Color Eliminado";
        break;

        case "3":
        localStorage.removeItem("nombre");
        localStorage.removeItem("colorFondo");
        document.querySelector("h1").textContent="Escribe tu nombre";
        document.querySelector("main").classList.add("oculto");
        document.body.style.backgroundColor="";
        mensaje.textContent="Nombre y color fondo eliminado";
        break;

        default:
            alert("Selecciona antes de eliminar");
            return;
    }
});
