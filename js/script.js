// Elementi form
var formGenera = document.getElementById('form-genera');
var formAnnulla = document.getElementById('form-annulla');
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');

// Elementi biglietto
var biglNome = document.getElementById('bigl-nome');
var biglCosto = document.getElementById('bigl-costo');
var biglCarrozza = document.getElementById('bigl-carrozza');
var biglCodiceCp = document.getElementById('bigl-codicecp');
var biglOfferta = document.getElementById('bigl-offerta');

// Evento Genera
formGenera.addEventListener('click',
  function() {

    // Calcolo Costo
    var prezzo = formKm.value * 0.21;

    // Calcolo costo scontato
    if( formEta.value == 'minorenne' ) {
      prezzo = prezzo - ( prezzo * 20 / 100 )
      biglOfferta.innerHTML = 'Biglietto Scontato per Minorenni';
    } else if( formEta.value == 'over' ) {
      prezzo = prezzo - ( prezzo * 40 / 100 )
      biglOfferta.innerHTML = 'Biglietto Scontato per Over 65';
    } else {
      biglOfferta.innerHTML = 'Biglietto Standard';
    }

    // Scrittura Biglietto
    biglNome.innerHTML = formNome.value;
    biglCosto.innerHTML = prezzo.toFixed(2) + ' Euro';
    biglCarrozza.innerHTML = Math.floor(Math.random() * 9) + 1;
    biglCodiceCp.innerHTML = Math.floor(Math.random() * 99999) + 1;
  }
);

// Evento Annulla
formAnnulla.addEventListener('click',
  function() {
    formNome.value = '';
    formKm.value = '';
    formEta.value = 'maggiorenne';
    biglNome.innerHTML = '';
    biglCosto.innerHTML = '0,00 Euro';
  }
);
