
import { mostraralerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";

(function () {

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
        }

        //console.log(cliente);
        if (validar(cliente)) {
            mostraralerta('Todos los campos son obligatorios');
            return;
        }

        nuevoCliente(cliente);
    }

    function validar(obj) {
        return !Object.values(obj).every(input => input !== '');
    }

})();