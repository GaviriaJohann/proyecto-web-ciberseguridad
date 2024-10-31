const table = document.querySelector('table');
table.classList.add('table', 'table-bordered', 'table-striped');

const headers = table.querySelectorAll('th');
headers.forEach(header => {
    header.classList.add('bg-light');
});

const contenedorImagen = document.getElementById('contenedorImagen');
contenedorImagen.classList.add('d-flex', 'justify-content-center', 'gap-3'); 

const contenedorVideo = document.getElementById('contenedorVideo');
contenedorVideo.classList.add('d-flex', 'flex-column', 'align-items-center')

const video = contenedorVideo.querySelector('video');
video.style.width = '300px';

const espacio = document.createElement('div');
espacio.style.marginRight = '20px';
contenedorVideo.appendChild(espacio);

table.style.width = '850px'; 

const imgRegulaciones = contenedorVideo.querySelector('#contenedorImagenRegulaciones img');
imgRegulaciones.style.width = '300px';
