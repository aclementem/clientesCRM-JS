import { mostraralerta } from './funciones.js'
import { actualizarCliente, obtenerCliente } from "./API.js";

(function () {

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parametrosURL.get('id');

        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarFormulario);
    });

    function mostrarCliente(cliente) {
        const { nombre, email, telefono, empresa, id } = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;

    }

    function validarFormulario(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }

        if (validar(cliente)) {
            mostraralerta('Todos los campos son obligatorios');
            return;
        }

        actualizarCliente(cliente);

    }


    function validar(obj) {
        return !Object.values(obj).every(input => input !== '');
    }


})();