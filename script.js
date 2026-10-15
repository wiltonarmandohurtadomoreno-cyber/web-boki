/* =========================
   FILTRAR POR CATEGORÍA
========================= */

function filtrar(categoria, boton) {

    const negocios = document.querySelectorAll(".business-card");
    const botones = document.querySelectorAll(".category");

    // Cambiar botón activo
    botones.forEach(function(btn) {
        btn.classList.remove("active");
    });

    boton.classList.add("active");

    // Mostrar negocios correspondientes
    negocios.forEach(function(negocio) {

        const categoriaNegocio = negocio.dataset.category;

        if (
            categoria === "todos" ||
            categoriaNegocio === categoria
        ) {

            negocio.style.display = "block";

        } else {

            negocio.style.display = "none";

        }

    });

}


/* =========================
   BUSCAR NEGOCIOS
========================= */

function buscarNegocios() {

    const texto = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const negocios = document.querySelectorAll(".business-card");

    negocios.forEach(function(negocio) {

        const contenido = negocio.innerText.toLowerCase();

        if (contenido.includes(texto)) {

            negocio.style.display = "block";

        } else {

            negocio.style.display = "none";

        }

    });

}


/* =========================
   BUSCAR AL PRESIONAR ENTER
========================= */

document
    .getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            buscarNegocios();

        }

    });


/* =========================
   FAVORITOS
========================= */

const favoritos = document.querySelectorAll(".favorite");

favoritos.forEach(function(boton) {

    boton.addEventListener("click", function(event) {

        event.stopPropagation();

        if (boton.textContent === "♡") {

            boton.textContent = "♥";

        } else {

            boton.textContent = "♡";

        }

    });

});
/* =========================
   FICHA DEL NEGOCIO
========================= */

const botonesVerNegocio = document.querySelectorAll(".view-business");

const businessPage = document.getElementById("business-page");
const businessesSection = document.getElementById("negocios");
const backToBusinesses = document.getElementById("back-to-businesses");

const pageBusinessName = document.getElementById("page-business-name");
const pageBusinessCategory = document.getElementById("page-business-category");
const pageBusinessRating = document.getElementById("page-business-rating");
const pageBusinessDescription = document.getElementById("page-business-description");
const pageBusinessLocation = document.getElementById("page-business-location");
const pageBusinessHours = document.getElementById("page-business-hours");
const pageBusinessServices = document.getElementById("page-business-services");
const pageBusinessImage = document.getElementById("page-business-image");
const businessGallery = document.getElementById("business-gallery");

const pageInstagramButton = document.getElementById("page-instagram-button");
const pageContactButton = document.getElementById("page-contact-button");


/* INFORMACIÓN DE CADA NEGOCIO */

/* INFORMACIÓN DE CADA NEGOCIO */

const datosNegocios = {

    "Mocca & Miel": {
        hours: "Lunes a sábado · 10:00 AM - 7:00 PM",
        services: "Cheesecakes, postres artesanales y pedidos personalizados.",
        instagram: "https://instagram.com/",
        contacto: "https://wa.me/"
    },

    "Studio Bloom": {
        hours: "Lunes a sábado · 9:00 AM - 6:00 PM",
        services: "Manicure, pedicure, uñas y servicios de belleza.",
        instagram: "https://instagram.com/",
        contacto: "https://wa.me/"
    },

    "Litte Don-nut": {
        hours: "Bajo pedidos",
        services: "Mini donas frescas, diferentes presentaciones y opciones de decoración.",
        instagram: "https://www.instagram.com/little_don_nut/",
        contacto: "https://wa.me/573133927647",

        imagenes: [
            "images/imagen1.jpg",
            "images/imagen2.jpg",
            "images/imagen3.jpg"
        ]
    }

};


/* ABRIR FICHA */

botonesVerNegocio.forEach(function(boton) {

    boton.addEventListener("click", function(event) {

        event.stopPropagation();

        const tarjeta = boton.closest(".business-card");

        const nombre = tarjeta.dataset.name;
        const categoria = tarjeta.querySelector(".business-category").textContent.trim();
        const rating = tarjeta.dataset.rating;
        const descripcion = tarjeta.dataset.description;
        const ubicacion = tarjeta.dataset.location;

        /* Información principal */

        pageBusinessName.textContent = nombre;
        pageBusinessCategory.textContent = categoria;
        pageBusinessRating.textContent = rating;
        pageBusinessDescription.textContent = descripcion;
        pageBusinessLocation.textContent = "♧ " + ubicacion;


        /* Información adicional */

        if (datosNegocios[nombre]) {

            pageBusinessHours.textContent =
                datosNegocios[nombre].hours;

            pageBusinessServices.textContent =
                datosNegocios[nombre].services;
                /* GALERÍA DE PRODUCTOS */

businessGallery.innerHTML = "";

if (datosNegocios[nombre].imagenes) {

    datosNegocios[nombre].imagenes.forEach(function(imagen) {

        const img = document.createElement("img");

        img.src = imagen;
        img.alt = "Producto de " + nombre;

        businessGallery.appendChild(img);

    });

}


            pageInstagramButton.onclick = function() {

                window.open(
                    datosNegocios[nombre].instagram,
                    "_blank"
                );

            };


            pageContactButton.onclick = function() {

                window.open(
                    datosNegocios[nombre].contacto,
                    "_blank"
                );

            };

        }


        /* Imagen */

        const imagen = tarjeta.querySelector(".business-image");

        if (imagen) {

            const estilos = window.getComputedStyle(imagen);

            pageBusinessImage.style.backgroundImage =
                estilos.backgroundImage;

        }


        /* Mostrar ficha */

        businessesSection.style.display = "none";

        businessPage.classList.add("show");

        businessPage.scrollIntoView({
    behavior: "smooth",
    block: "start"
});

    });

});


/* VOLVER A NEGOCIOS */

backToBusinesses.addEventListener("click", function() {

    businessPage.classList.remove("show");

    businessesSection.style.display = "block";

    window.scrollTo({
        top: businessesSection.offsetTop,
        behavior: "smooth"
    });

});
/* =========================
   REGISTRO DE NEGOCIO
========================= */

const openRegister = document.getElementById("open-register");
const registerModal = document.getElementById("register-modal");
const closeRegister = document.getElementById("close-register");
const businessForm = document.getElementById("business-form");


/* ABRIR FORMULARIO */

openRegister.addEventListener("click", function() {

    registerModal.classList.add("show");

});


/* CERRAR FORMULARIO */

closeRegister.addEventListener("click", function() {

    registerModal.classList.remove("show");

});


/* CERRAR AL HACER CLIC AFUERA */

registerModal.addEventListener("click", function(event) {

    if (event.target === registerModal) {

        registerModal.classList.remove("show");

    }

});


/* ENVIAR FORMULARIO */

businessForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("¡Tu negocio ha sido registrado en Boki! ✨");

    businessForm.reset();

    registerModal.classList.remove("show");

});