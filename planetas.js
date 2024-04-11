let indice = 0;
mostrarSlide(indice);

// Agrega eventos a los botones
document.querySelector(".previo").addEventListener("click", function() {
    mostrarSlide(indice -= 1);
});
document.querySelector(".siguiente").addEventListener("click", function() {
    mostrarSlide(indice += 1);
});

function mostrarSlide(n) {
    let i;
    let slide = document.getElementsByClassName("slide");
    if (n >= slide.length) {indice = 0}    
    if (n < 0) {indice = slide.length-1}
    for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
}
    slide[indice].style.display = "block";  
}

