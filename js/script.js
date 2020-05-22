// Buttons
var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');

// Elementi form
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');
var errore = document.getElementById('errore');

console.log(formNome.value);
console.log(formKm.value);

// Elementi biglietto
var biglietto = document.getElementById('biglietto');
var biglNome = document.getElementById('bigl-nome');
var biglCosto = document.getElementById('bigl-costo');
var biglCarrozza = document.getElementById('bigl-carrozza');
var biglCodiceCp = document.getElementById('bigl-codicecp');
var biglOfferta = document.getElementById('bigl-offerta');

// Evento Button Genera
btnGenera.addEventListener('click',
  function() {

    // Dati incorretti
    if ( isNaN(formKm.value) || formNome.value.lenght == 0 ) {
      errore.className = 'block';
    }
    // Dati corretti
    else {
      // Calcolo Costo
      var prezzo = parseInt(formKm.value) * 0.21;
      biglOfferta.innerHTML = 'Biglietto Standard';

      // Calcolo Costo Minorenni
      if( formEta.value == 'minorenne' ) {
        prezzo = prezzo - ( prezzo * 20 / 100 )
        biglOfferta.innerHTML = 'Biglietto Scontato per Minorenni';
      }
      // Calcolo Costo Over 65
      else if( formEta.value == 'over' ) {
        prezzo = prezzo - ( prezzo * 40 / 100 )
        biglOfferta.innerHTML = 'Biglietto Scontato per Over 65';
      }

      // Scrittura Biglietto
      biglNome.innerHTML = formNome.value;
      biglCosto.innerHTML = prezzo.toFixed(2) + ' Euro';
      biglCarrozza.innerHTML = Math.floor(Math.random() * 9) + 1;
      biglCodiceCp.innerHTML = Math.floor(Math.random() * 99999) + 1;

      // Biglietto in vista
      biglietto.className = 'biglietto block';
    }
    }

);

// Evento Button Annulla
btnAnnulla.addEventListener('click',
  function() {
    // Nascondi errore
    errore.className = 'hidden';

    // Reset Form
    formNome.value = '';
    formKm.value = '';
    formEta.value = 'maggiorenne';

    // Reset Biglietto
    biglNome.innerHTML = '';
    biglCosto.innerHTML = '';
    biglCarrozza.innerHTML = '';
    biglCodiceCp.innerHTML = '';
    biglOfferta.innerHTML = '';

    // Biglietto nascosto
    biglietto.className = 'biglietto hidden';
  }
);
