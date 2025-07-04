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
        "Euler y Euler modificado",
        "Runge-Kutta"
    ]
};

const descripciones = {
    "Bisección": "El método de bisección es una técnica para encontrar raíces de funciones continuas, dividiendo el intervalo a la mitad hasta encontrar una raíz aproximada.",
    "Newton Raphson": "Método que utiliza derivadas para encontrar raíces de una función de manera iterativa.",
    "Secante": "Método iterativo que aproxima una raíz sin necesidad de derivadas, usando dos puntos iniciales.",
    "Punto fijo": "Método que convierte una ecuación en una forma iterativa y converge a una solución bajo ciertas condiciones.",
    "Gauss Gauss-Jordan": "Técnica de eliminación para resolver sistemas de ecuaciones lineales de forma matricial.",
    "Gauss –Seidel y Jacobi": "Métodos iterativos para resolver sistemas de ecuaciones lineales.",
    "Montante": "Método para resolver sistemas lineales mediante determinantes.",
    "Interpolación y Método de Lagrange": "Método para encontrar un polinomio que pase por un conjunto de puntos dados.",
    "Regresión lineal y regresión lineal múltiple": "La regresión lineal analiza la relación entre dos variables. La múltiple, entre varias variables independientes y una dependiente.",
    "Regresión polinomial": "Modelo que ajusta una relación no lineal entre la variable independiente y la dependiente mediante un polinomio.",
    "Diferencias divididas": "Método de interpolación que permite construir un polinomio que pase por puntos dados, usando una tabla de diferencias.",
    "Trapecio": "Técnica de integración numérica que aproxima el área bajo la curva como una serie de trapecios.",
    "Simpson 1/3 y 3/8": "Métodos que aproximan la integral de una función usando polinomios de segundo y tercer grado.",
    "Romberg y Richardson": "Técnicas que mejoran la precisión de la integración numérica combinando estimaciones previas.",
    "Euler y Euler modificado": "Métodos para aproximar soluciones de ecuaciones diferenciales ordinarias usando pasos discretos.",
    "Runge-Kutta": "Método numérico para resolver ecuaciones diferenciales ordinarias, más preciso que los métodos de Euler."
};

const pdfs = {
    "Bisección": "assets/biseccion.pdf",
    "Newton Raphson": "assets/Newton_raph.pdf",
    "Secante": "assets/secante.pdf",
    "Punto fijo": "assets/punto_fijo.pdf",
    "Gauss Gauss-Jordan": "assets/metodogauss.pdf",
    "Gauss –Seidel y Jacobi": "assets/gauss_seidel.pdf",
    "Montante": "assets/montante.pdf",
    "Interpolación y Método de Lagrange": "assets/lagrange.pdf",
    "Regresión lineal y regresión lineal múltiple": "assets/regre_linea_simple.pdf",
    "Regresión polinomial": "assets/regresion_polinomial.pdf",
    "Diferencias divididas": "assets/diferencias.pdf",
    "Trapecio": "assets/trapecio.pdf",
    "Simpson 1/3 y 3/8": "assets/simpson.pdf",
    "Romberg y Richardson": "assets/romberg.pdf",
    "Euler y Euler modificado": "assets/euler.pdf",
    "Runge-Kutta": "assets/runge_kutta.pdf"
};

const excels = {
    "Bisección": "assets/excels/biseccion.png",
    "Newton Raphson": "assets/excels/newton_raph.png",
    "Secante": "assets/excels/secante.png",
    "Punto fijo": "assets/excels/punto_fijo.png",
    "Interpolación y Método de Lagrange": "assets/excels/lagrange.png",
    "Regresión lineal y regresión lineal múltiple": "assets/excels/regresion_simple.png",
    "Regresión polinomial": "assets/excels/regresion_polinomial.png",
    "Diferencias divididas": "assets/excels/diferencias.png",
    "Trapecio": "assets/excels/trapecio.png",
    "Simpson 1/3 y 3/8": "assets/excels/simpson.png",
    "Romberg y Richardson": "assets/excels/romberg.png",
    "Euler y Euler modificado": "assets/excels/euler.png",
    "Runge-Kutta": "assets/excels/runge_kutta.png"
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
    contenido.innerHTML = "";

    const card = document.createElement("div");
    card.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    const texto = document.createElement("p");
    texto.innerHTML = descripciones[nombre] || `Información del método <b>${nombre}</b> en el ${parcial}${sufijo} Parcial.`;

    const btnPDF = document.createElement("button");
    btnPDF.textContent = "Ver PDF";
    btnPDF.addEventListener("click", () => {
        const pdfSrc = pdfs[nombre];
        if (pdfSrc) window.open(pdfSrc, '_blank');
    });

    const btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver";
    btnVolver.addEventListener("click", () => mostrarParcial(parcial));

    card.appendChild(titulo);
    card.appendChild(texto);
    card.appendChild(btnPDF);

    if (excels[nombre]) {
        const btnExcel = document.createElement("button");
        btnExcel.textContent = "Ver Excel";
        btnExcel.addEventListener("click", () => mostrarExcel(nombre, parcial));
        card.appendChild(btnExcel);
    }

    card.appendChild(btnVolver);
    contenido.appendChild(card);
}

function mostrarExcel(nombre, parcial) {
    const contenido = document.getElementById("contenido");
    contenido.innerHTML = "";

    const card = document.createElement("div");
    card.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = `${nombre} - Excel`;

    const img = document.createElement("img");
    img.src = excels[nombre] || "";
    img.alt = `Aquí está el excel de un ejercicio`;
    img.style.width = "100%";
    img.style.maxWidth = "600px";
    img.style.borderRadius = "8px";
    img.style.border = "2px solid #88c0d0";

    const btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver";
    btnVolver.addEventListener("click", () => mostrarMetodo(nombre, parcial));

    card.appendChild(titulo);
    card.appendChild(img);
    card.appendChild(btnVolver);

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
