const listarVideos = async () => {
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
};

export const conexionAPI = {
    listarVideos
}