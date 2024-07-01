document.addEventListener("DOMContentLoaded", function () {
    const formIngresos = document.getElementById("formIngresos");
    const listaIngresos = document.getElementById("listaIngresos");
    const formGastos = document.getElementById("formGastos");
    const listaGastos = document.getElementById("listaGastos");
    const dineroDisponibleInput = document.getElementById("dineroDisponible");

    let ingresos = JSON.parse(localStorage.getItem("ingresos")) || [];
    let gastos = JSON.parse(localStorage.getItem("gastos")) || [];

    const agregarIngreso = (tipo, descripcion, monto) => {
        ingresos.push({ tipo, descripcion, monto });
        localStorage.setItem("ingresos", JSON.stringify(ingresos));
        mostrarIngresos();
        actualizarDineroDisponible();
    };

    const eliminarIngreso = (index) => {
        ingresos.splice(index, 1);
        localStorage.setItem("ingresos", JSON.stringify(ingresos));
        mostrarIngresos();
        actualizarDineroDisponible();
    };

    const agregarGasto = (tipo, descripcion, monto) => {
        gastos.push({ tipo, descripcion, monto });
        localStorage.setItem("gastos", JSON.stringify(gastos));
        mostrarGastos();
        actualizarDineroDisponible();
    };

    const eliminarGasto = (index) => {
        gastos.splice(index, 1);
        localStorage.setItem("gastos", JSON.stringify(gastos));
        mostrarGastos();
        actualizarDineroDisponible();
    };

    const mostrarIngresos = () => {
        listaIngresos.innerHTML = "";
        ingresos.forEach((ingreso, index) => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = `${ingreso.tipo} - ${ingreso.descripcion}: $${ingreso.monto} 
                <button class="btn btn-danger btn-sm eliminar-ingreso" data-index="${index}">Eliminar</button>`;
            listaIngresos.appendChild(li);
        });
    };

    const mostrarGastos = () => {
        listaGastos.innerHTML = "";
        gastos.forEach((gasto, index) => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = `${gasto.tipo} - ${gasto.descripcion}: $${gasto.monto} 
                <button class="btn btn-danger btn-sm eliminar-gasto" data-index="${index}">Eliminar</button>`;
            listaGastos.appendChild(li);
        });
    };

    const actualizarDineroDisponible = () => {
        const totalIngresos = ingresos.reduce((acc, ingreso) => acc + parseFloat(ingreso.monto), 0);
        const totalGastos = gastos.reduce((acc, gasto) => acc + parseFloat(gasto.monto), 0);
        const dineroDisponible = totalIngresos - totalGastos;
        dineroDisponibleInput.value = dineroDisponible;
    };

    formIngresos.addEventListener("submit", (event) => {
        event.preventDefault();
        const tipoIngreso = document.getElementById("tipoIngreso").value;
        const descripcionIngreso = document.getElementById("descripcionIngreso").value;
        const montoIngreso = document.getElementById("montoIngreso").value;
        agregarIngreso(tipoIngreso, descripcionIngreso, montoIngreso);
        formIngresos.reset();
    });

    formGastos.addEventListener("submit", (event) => {
        event.preventDefault();
        const tipoGasto = document.getElementById("tipoGasto").value;
        const descripcionGasto = document.getElementById("descripcionGasto").value;
        const montoGasto = document.getElementById("montoGasto").value;
        agregarGasto(tipoGasto, descripcionGasto, montoGasto);
        formGastos.reset();
    });

    listaIngresos.addEventListener("click", (event) => {
        if (event.target.classList.contains("eliminar-ingreso")) {
            const index = event.target.getAttribute("data-index");
            eliminarIngreso(index);
        }
    });

    listaGastos.addEventListener("click", (event) => {
        if (event.target.classList.contains("eliminar-gasto")) {
            const index = event.target.getAttribute("data-index");
            eliminarGasto(index);
        }
    });

    document.getElementById("infoBtn").addEventListener("click", () => {
        const infoContent = document.getElementById("infoContent");
        infoContent.style.display = infoContent.style.display === "none" ? "block" : "none";
    });

    mostrarIngresos();
    mostrarGastos();
    actualizarDineroDisponible();
});
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { name: 'Giselle', file: 'Giselle_Figueroa.jpg' },
    ];

    const gallery = document.getElementById('gallery');

    gallery.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `image/${image.file}`;
        imgElement.alt = image.name;
        imgElement.title = image.name;
        imgElement.className = 'img-thumbnail m-2'; 
        imgElement.style.width = '150px'; 
        imgElement.style.height = '150px'; 
        gallery.appendChild(imgElement);
    });
});