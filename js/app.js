// app.js

const metodos = {
    1: [
        "Bisección",
        "Newton Raphson",
        "Secante",
        "Punto fijo",
        "Gauss Gauss-Jordan"
    ],
    2: [
        "Gauss –Seidel y Jacobi",
        "Montante",
        "Interpolación y Método de Lagrange",
        "Regresión lineal y regresión lineal múltiple",
        "Regresión polinomial"
    ],
    3: [
        "Diferencias divididas",
        "Trapecio",
        "Simpson 1/3 y 3/8",
        "Romberg y Richardson",
        "Euler y Euler modificado"
    ]
};

const pdfs = {
    "Bisección": "assets/biseccion.pdf",
    "Newton Raphson": "assets/newton_raphson.pdf",
    "Secante": "assets/secante.pdf",
    "Punto fijo": "assets/punto_fijo.pdf",
    "Gauss Gauss-Jordan": "assets/gauss_jordan.pdf",
    "Gauss –Seidel y Jacobi": "assets/gauss_seidel_jacobi.pdf",
    "Montante": "assets/montante.pdf",
    "Interpolación y Método de Lagrange": "assets/interpolacion_lagrange.pdf",
    "Regresión lineal y regresión lineal múltiple": "assets/regresion_lineal_multiple.pdf",
    "Regresión polinomial": "assets/regresion_polinomial.pdf",
    "Diferencias divididas": "assets/diferencias_divididas.pdf",
    "Trapecio": "assets/trapecio.pdf",
    "Simpson 1/3 y 3/8": "assets/simpson.pdf",
    "Romberg y Richardson": "assets/romberg_richardson.pdf",
    "Euler y Euler modificado": "assets/euler.pdf"
};

const excels = {
    "Bisección": "assets/excels/biseccion.png",
    "Newton Raphson": "assets/excels/newton_raphson.png",
    "Secante": "assets/excels/secante.png",
    "Punto fijo": "assets/excels/punto_fijo.png",
    "Gauss Gauss-Jordan": "assets/excels/gauss_jordan.png",
    "Gauss –Seidel y Jacobi": "assets/excels/gauss_seidel_jacobi.png",
    "Montante": "assets/excels/montante.png",
    "Interpolación y Método de Lagrange": "assets/excels/interpolacion_lagrange.png",
    "Regresión lineal y regresión lineal múltiple": "assets/excels/regresion_lineal_multiple.png",
    "Regresión polinomial": "assets/excels/regresion_polinomial.png",
    "Diferencias divididas": "assets/excels/diferencias_divididas.png",
    "Trapecio": "assets/excels/trapecio.png",
    "Simpson 1/3 y 3/8": "assets/excels/simpson.png",
    "Romberg y Richardson": "assets/excels/romberg_richardson.png",
    "Euler y Euler modificado": "assets/excels/euler.png"
};

const descripciones = {
    "Bisección": "El método de bisección es una técnica para encontrar raíces de funciones continuas, dividiendo el intervalo a la mitad hasta encontrar una raíz aproximada.",
    "Newton Raphson": "Método que utiliza derivadas para encontrar raíces de una función de manera iterativa.",
    "Secante": "Método iterativo que aproxima una raíz sin necesidad de derivadas, usando dos puntos iniciales.",
    "Punto fijo": "Método que convierte una ecuación en una forma iterativa y converge a una solución bajo ciertas condiciones.",
    "Gauss Gauss-Jordan": "Técnica de eliminación para resolver sistemas de ecuaciones lineales de forma matricial.",
    "Gauss –Seidel y Jacobi": "Métodos iterativos para resolver sistemas de ecuaciones lineales, mejorando sucesivamente la solución.",
    "Montante": "Método matricial que permite resolver sistemas de ecuaciones sin operaciones con fracciones intermedias.",
    "Interpolación y Método de Lagrange": "Permiten construir un polinomio que pase por un conjunto de puntos dados.",
    "Regresión lineal y regresión lineal múltiple": "Técnicas para ajustar una recta o un plano a un conjunto de datos y hacer predicciones.",
    "Regresión polinomial": "Ajuste de una función polinomial a un conjunto de datos para modelar relaciones más complejas.",
    "Diferencias divididas": "Técnica usada en interpolación para construir polinomios de Newton.",
    "Trapecio": "Método numérico para calcular integrales aproximando el área bajo la curva con trapecios.",
    "Simpson 1/3 y 3/8": "Métodos para integrar funciones utilizando parábolas que se ajustan a intervalos del dominio.",
    "Romberg y Richardson": "Técnicas de integración que mejoran resultados de otros métodos mediante extrapolación.",
    "Euler y Euler modificado": "Métodos para resolver ecuaciones diferenciales de primer orden de forma aproximada."
};

function obtenerSufijo(parcial) {
    if (parcial === 1) return "er";
    if (parcial === 2) return "do";
    if (parcial === 3) return "er";
    return "°";
}

function mostrarParcial(parcial) {
    const sufijo = obtenerSufijo(parcial);
    const contenido = document.getElementById("contenido");
    contenido.classList.remove("hidden");
    document.getElementById("menu").classList.add("hidden");

    contenido.innerHTML = `
        <h2>${parcial}${sufijo} Parcial</h2>
        <ol id="lista-metodos"></ol>
        <button id="volverMenu">Volver</button>
    `;

    const lista = document.getElementById("lista-metodos");
    metodos[parcial].forEach((metodo) => {
        const li = document.createElement("li");
        li.textContent = metodo;
        li.classList.add("metodo-item");
        li.addEventListener("click", () => mostrarMetodo(metodo, parcial));
        lista.appendChild(li);
    });

    document.getElementById("volverMenu").addEventListener("click", mostrarMenu);
}

function mostrarMetodo(nombre, parcial) {
    const sufijo = obtenerSufijo(parcial);
    const contenido = document.getElementById("contenido");

    const descripcion = descripciones[nombre] || `Información del método <b>${nombre}</b> en el ${parcial}${sufijo} Parcial.`;

    const card = document.createElement("div");
    card.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    const texto = document.createElement("p");
    texto.innerHTML = descripcion;

    const btnPDF = document.createElement("button");
    btnPDF.textContent = "Ver PDF";
    btnPDF.addEventListener("click", () => verPDF(nombre, parcial));

    const btnExcel = document.createElement("button");
    btnExcel.textContent = "Ver Excel";
    btnExcel.addEventListener("click", () => verExcel(nombre, parcial));

    const btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver";
    btnVolver.addEventListener("click", () => mostrarParcial(parcial));

    card.appendChild(titulo);
    card.appendChild(texto);
    card.appendChild(btnPDF);
    card.appendChild(btnExcel);
    card.appendChild(btnVolver);

    contenido.innerHTML = "";
    contenido.appendChild(card);
}

function verPDF(nombre, parcial) {
    const contenido = document.getElementById("contenido");
    const pdfSrc = pdfs[nombre] || "#";

    const card = document.createElement("div");
    card.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = `${nombre} - PDF`;

    const iframe = document.createElement("iframe");
    iframe.src = pdfSrc;
    iframe.width = "100%";
    iframe.height = "500px";
    iframe.style.border = "2px solid #88c0d0";
    iframe.style.borderRadius = "8px";

    const botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar PDF";
    botonCerrar.addEventListener("click", () => mostrarMetodo(nombre, parcial));

    card.appendChild(titulo);
    card.appendChild(iframe);
    card.appendChild(botonCerrar);

    contenido.innerHTML = "";
    contenido.appendChild(card);
}

function verExcel(nombre, parcial) {
    const contenido = document.getElementById("contenido");
    const imgSrc = excels[nombre] || "";

    const card = document.createElement("div");
    card.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = `${nombre} - Ejemplo en Excel`;

    const imagen = document.createElement("img");
    imagen.src = imgSrc;
    imagen.alt = `Excel de ${nombre}`;
    imagen.style.maxWidth = "100%";
    imagen.style.border = "2px solid #88c0d0";
    imagen.style.borderRadius = "8px";

    const botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar Excel";
    botonCerrar.addEventListener("click", () => mostrarMetodo(nombre, parcial));

    card.appendChild(titulo);
    card.appendChild(imagen);
    card.appendChild(botonCerrar);

    contenido.innerHTML = "";
    contenido.appendChild(card);
}

function mostrarMenu() {
    document.getElementById("menu").classList.remove("hidden");
    const contenido = document.getElementById("contenido");
    contenido.classList.add("hidden");
    contenido.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnParcial1").addEventListener("click", () => mostrarParcial(1));
    document.getElementById("btnParcial2").addEventListener("click", () => mostrarParcial(2));
    document.getElementById("btnParcial3").addEventListener("click", () => mostrarParcial(3));
});
