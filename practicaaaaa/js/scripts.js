function cambiarFrase() {
  const frases = [
    "¡Hoy sí vine a clases!",
    "Aprobar es mejor que robar la Navidad.",
    "CECyTEM al 100 con el Grinch."
  ];
  const azar = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").textContent = frases[azar];
}

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const plantel = document.getElementById("plantel").value;
  const texto = document.getElementById("texto").value;

  const nueva = document.createElement("div");
  nueva.className = "caja";
  nueva.innerHTML = `<p>"${texto}" - <b>${nombre}</b> (${plantel})</p>`;

  document.getElementById("lista-resenas").appendChild(nueva);
  document.getElementById("respuesta").textContent = "¡Reseña agregada!";
  this.reset();
});