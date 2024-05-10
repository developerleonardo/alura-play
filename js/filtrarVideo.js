import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

const boton = document.querySelector("[data-boton-busqueda]");

async function filtrarVideo(event) {
    event.preventDefault();
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));
};

boton.addEventListener("click", event => filtrarVideo(event));