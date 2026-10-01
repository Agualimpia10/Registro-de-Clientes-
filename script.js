const registroForm = document.getElementById('registroForm');
const resultado = document.getElementById('resultado');

registroForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const ciudad = document.getElementById('ciudad').value;

  // Mostramos la información con innerHTML
  resultado.innerHTML = `
    <div>¡Registro exitoso!</div>
    <p><strong>Usuario:</strong> ${nombre} ${apellido}</p>
    <p><strong>Contacto:</strong> ${email} | ${telefono}</p>
    <p><strong>Ubicación:</strong> ${direccion}, ${ciudad}</p>
  `;
  
  // Cambiamos el estilo del resultado 
  resultado.style.display = 'block';
  resultado.style.padding = '10px';
  resultado.style.backgroundColor = 'black';
  resultado.style.color = 'white';

  // Reinicio del formulario
  registroForm.reset();
});