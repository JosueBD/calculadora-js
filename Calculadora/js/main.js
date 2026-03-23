const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

// BOTONES
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (valor === "C") {
            limpiar();
        } else if (valor === "←") {
            borrar();
        } else if (valor === "=") {
            calcular();
        } else {
            agregar(valor);
        }
    });
});

// TECLADO (FUERA del forEach)
document.addEventListener("keydown", (e) => {
    const tecla = e.key;

    if (!isNaN(tecla) || ["+", "-", "*", "/", "."].includes(tecla)) {
        agregar(tecla);
    } else if (tecla === "Enter") {
        calcular();
    } else if (tecla === "Backspace") {
        borrar();
    } else if (tecla.toLowerCase() === "c") {
        limpiar();
    }
});

// FUNCIONES
function agregar(valor) {
    if (pantalla.textContent === "0") {
        pantalla.textContent = valor;
    } else {
        pantalla.textContent += valor;
    }
}

function calcular() {
    try {
        pantalla.textContent = eval(pantalla.textContent);
    } catch {
        pantalla.textContent = "Error";
    }
}

function borrar() {
    pantalla.textContent = pantalla.textContent.slice(0, -1) || "0";
}

function limpiar() {
    pantalla.textContent = "0";
}