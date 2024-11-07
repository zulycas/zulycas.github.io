const Formulario = document.getElementById('formulario');
const Usuario = document.getElementById('usuario');
const Contrasena = document.getElementById('clave');
const Boton = document.getElementById('inicio_sesion');
const Conectado = document.getElementById('wifi');
Conectado.style['display'] = 'none'

const ValidarDatos = () => {
    if (usuario.value === 'wifi' && clave.value === 'wifi') {
        Conectado.style['display'] = 'flex'
        Formulario.style['display'] = 'none'
    } else { alert("Usuario o clave invalida") }
}

Boton.addEventListener('click', ValidarDatos)