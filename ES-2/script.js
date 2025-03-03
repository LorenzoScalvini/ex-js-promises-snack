function creaLanciaDado() {
  let ultimoLancio = null;

  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.2) {
          reject('Il dado si è incastrato!');
        } else {
          const numero = Math.floor(Math.random() * 6) + 1;
          if (numero === ultimoLancio) {
            console.log(
              'Incredibile! È uscito lo stesso numero due volte di fila!'
            );
          }
          ultimoLancio = numero;
          console.log(`Hai lanciato un ${numero}!`);
          resolve(numero);
        }
      }, 3000);
    });
  };
}

const lanciaDado = creaLanciaDado();

// Funzione per simulare lanci ripetuti
function simulaLancio() {
  console.log('Lancio in corso...');
  lanciaDado()
    .then(() => {
      setTimeout(simulaLancio, 3000);
    })
    .catch(() => {
      setTimeout(simulaLancio, 3000);
    });
}

simulaLancio();
