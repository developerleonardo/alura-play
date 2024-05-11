import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(event) {
    event.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const descripcion = Math.floor(Math.random() * 10).toString();
    try {
        await conexionAPI.enviarVideo(titulo, descripcion, url, imagen);
        window.location.href = "../pages/envio-concluido.html";
    } catch(error) {
        alert(error);
    }
};

formulario.addEventListener("submit", (event) => crearVideo(event))