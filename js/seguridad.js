document.addEventListener("DOMContentLoaded", function() {
    const contenedorVideo = document.getElementById("contenedorVideo");
    if (contenedorVideo) {
        contenedorVideo.style.display = "flex";
        contenedorVideo.style.justifyContent = "center";
    }

    const imagenFirewalls = document.getElementById("imagenFirewalls");
    if (imagenFirewalls) {
        imagenFirewalls.style.display = "flex";
        imagenFirewalls.style.justifyContent = "center";
        imagenFirewalls.style.gap = "10px";
    }

    const videoVPN = document.getElementById("videoVPN");
    if (videoVPN) {
        videoVPN.style.display = "flex";
        videoVPN.style.justifyContent = "center";
    }
});