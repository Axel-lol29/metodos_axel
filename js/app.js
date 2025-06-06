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

const descripciones = {
    "Bisección": "El método de bisección es una técnica para encontrar raíces de funciones continuas, dividiendo el intervalo a la mitad hasta encontrar una raíz aproximada.",
    "Newton Raphson": "Método que utiliza derivadas para encontrar raíces de una función de manera iterativa.",
    "Secante": "Método iterativo que aproxima una raíz sin necesidad de derivadas, usando dos puntos iniciales.",
    "Punto fijo": "Método que convierte una ecuación en una forma iterativa y converge a una solución bajo ciertas condiciones.",
    "Gauss Gauss-Jordan": "Técnica de eliminación para resolver sistemas de ecuaciones lineales de forma matricial.",
    "Gauss –Seidel y Jacobi": "Métodos iterativos para resolver sistemas de ecuaciones lineales, útiles en matrices grandes y dispersas.",
    "Montante": "También conocido como método de Bareiss, útil para resolver sistemas lineales mediante determinantes.",
    "Interpolación y Método de Lagrange": "Técnicas para estimar valores intermedios en datos tabulados mediante polinomios.",
    "Regresión lineal y regresión lineal múltiple": "Modelos matemáticos para predecir una variable dependiente a partir de una o más independientes.",
    "Regresión polinomial": "Extensión de la regresión lineal que ajusta datos a una curva polinómica.",
    "Diferencias divididas": "Método de interpolación basado en la diferencia de valores entre puntos sucesivos.",
    "Trapecio": "Método de integración numérica que aproxima el área bajo la curva dividiendo el intervalo en trapecios.",
    "Simpson 1/3 y 3/8": "Métodos más precisos de integración numérica que usan polinomios para aproximar áreas.",
    "Romberg y Richardson": "Técnicas que mejoran los resultados de métodos de integración mediante extrapolación.",
    "Euler y Euler modificado": "Métodos numéricos para resolver ecuaciones diferenciales usando aproximaciones sucesivas."
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
    let archivo = nombre.toLowerCase().replace(/ /g, "_").replace(/[–—]/g, "-") + ".pdf";
    const pdfSrc = `assets/${archivo}`;

    window.open(pdfSrc, "_blank");

    const contenido = document.getElementById("contenido");

    const card = document.createElement("div");
    card.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = `${nombre} - PDF abierto`;

    const mensaje = document.createElement("p");
    mensaje.textContent = "El PDF se abrió en una nueva pestaña. Si no se abrió, revisa el bloqueo de ventanas emergentes.";

    const botonVolver = document.createElement("button");
    botonVolver.textContent = "Volver";
    botonVolver.addEventListener("click", () => mostrarMetodo(nombre, parcial));

    card.appendChild(titulo);
    card.appendChild(mensaje);
    card.appendChild(botonVolver);

    contenido.innerHTML = "";
    contenido.appendChild(card);
}

function verExcel(nombre, parcial) {
    const contenido = document.getElementById("contenido");

    const card = document.createElement("div");
    card.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = `${nombre} - Excel`;

    const mensaje = document.createElement("p");
    mensaje.textContent = "Aquí está el excel de un ejercicio.";

    const img = document.createElement("img");
    img.src = `assets/excels/${nombre.toLowerCase().replace(/ /g, "_")}.png`;
    img.alt = `Excel de ${nombre}`;
    img.style.maxWidth = "100%";
    img.style.border = "2px solid #ccc";
    img.style.borderRadius = "8px";
    img.style.marginTop = "10px";

    const botonVolver = document.createElement("button");
    botonVolver.textContent = "Volver";
    botonVolver.addEventListener("click", () => mostrarMetodo(nombre, parcial));

    card.appendChild(titulo);
    card.appendChild(mensaje);
    card.appendChild(img);
    card.appendChild(botonVolver);

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
