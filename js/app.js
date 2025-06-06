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

    const descripciones = {
        "Bisección": "El método de bisección es una técnica para encontrar raíces de funciones continuas, dividiendo el intervalo a la mitad hasta encontrar una raíz aproximada.",
        "Newton Raphson": "Método que utiliza derivadas para encontrar raíces de una función de manera iterativa.",
        "Secante": "Método iterativo que aproxima una raíz sin necesidad de derivadas, usando dos puntos iniciales.",
        "Punto fijo": "Método que convierte una ecuación en una forma iterativa y converge a una solución bajo ciertas condiciones.",
        "Gauss Gauss-Jordan": "Técnica de eliminación para resolver sistemas de ecuaciones lineales de forma matricial."
    };

    const descripcion = descripciones[nombre] || `Información del método <b>${nombre}</b> en el ${parcial}${sufijo} Parcial.`;

    const card = document.createElement("div");
    card.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    const texto = document.createElement("p");
    texto.innerHTML = descripcion;

    card.appendChild(titulo);
    card.appendChild(texto);

    if (nombre === "Bisección") {
        const btnPDF = document.createElement("button");
        btnPDF.textContent = "Ver PDF";
        btnPDF.addEventListener("click", () => verPDF(nombre, parcial));
        card.appendChild(btnPDF);
    }

    const btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver";
    btnVolver.addEventListener("click", () => mostrarParcial(parcial));
    card.appendChild(btnVolver);

    contenido.innerHTML = "";
    contenido.appendChild(card);
}

function verPDF(nombre, parcial) {
    const contenido = document.getElementById("contenido");

    let pdfSrc = "";
    if (nombre === "Bisección") {
        pdfSrc = "assets/biseccion.pdf";
    }

    const card = document.createElement("div");
    card.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = `${nombre} - PDF`;

    const botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar PDF";
    botonCerrar.style.marginBottom = "10px";
    botonCerrar.addEventListener("click", () => mostrarMetodo(nombre, parcial));

    const iframe = document.createElement("iframe");
    iframe.src = pdfSrc;
    iframe.width = "100%";
    iframe.height = "500px";
    iframe.style.border = "2px solid #88c0d0";
    iframe.style.borderRadius = "8px";

    card.appendChild(titulo);
    card.appendChild(botonCerrar);
    card.appendChild(iframe);

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
