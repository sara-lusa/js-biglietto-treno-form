// Elementi form
var formGenera = document.getElementById('form-genera');
var formAnnulla = document.getElementById('form-annulla');
var formNome = document.getElementById('form-nome');
var formKm = parseInt(document.getElementById('form-km'));


// Elementi biglietto
var biglNome = document.getElementById('bigl-nome');

// Evento Genera
formGenera.addEventListener('click',
  function() {
    // Calcolo Costo
    var prezzo = formKm.value * 0.21;

    // Calcolo costo scontato
    

    // Scrittura Biglietto
    biglNome.innerHTML = formNome.value;
  }
);
