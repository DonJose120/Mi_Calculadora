
function enviar() {

    var contenido = document.querySelector('#contenido');

    var v1 = document.querySelector('#t1').value;
    var v2 = document.querySelector('#t2').value;

    var url = "";

    var opcion1 = document.querySelector('#opcion1').checked;
    var opcion2 = document.querySelector('#opcion2').checked;
    var opcion3 = document.querySelector('#opcion3').checked;
    var opcion4 = document.querySelector('#opcion4').checked;
    var opcion5 = document.querySelector('#opcion5').checked;
    var opcion6 = document.querySelector('#opcion6').checked;
    var opcion7 = document.querySelector('#opcion7').checked;

    if (v1 === "") {
        swal("Advertencia", "Ingrese el primer número", "warning");
        return;
    }

    if (!opcion6 && !opcion7 && v2 === "") {
        swal("Advertencia", "Ingrese el segundo número", "warning");
        return;
    }

    if (opcion1)
        url = 'http://127.0.0.1:5000/' + v1 + '/' + v2;

    else if (opcion2)
        url = 'http://127.0.0.1:5000/resta/' + v1 + '/' + v2;

    else if (opcion3)
        url = 'http://127.0.0.1:5000/multiplicacion/' + v1 + '/' + v2;

    else if (opcion4)
        url = 'http://127.0.0.1:5000/division/' + v1 + '/' + v2;

    else if (opcion5)
        url = 'http://127.0.0.1:5000/potenciacion/' + v1 + '/' + v2;

    else if (opcion6)
        url = 'http://127.0.0.1:5000/seno/' + v1;

    else if (opcion7)
        url = 'http://127.0.0.1:5000/coseno/' + v1;

    fetch(url)

        .then(function(response) {

            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(function(error) {
                    throw new Error(error.Error || "Error en la operación");
                });
            }

        })

        .then(function(texto) {

            console.log(texto);

            var cadena = `
                <div class="alert alert-success">
                    <h3>Resultado: ${texto.Resultado}</h3>
                    <h4>Operación: ${texto.Operacion}</h4>
                </div>
            `;

            contenido.innerHTML = cadena;

        })

        .catch(function(error) {

            console.log(error);

            swal("Advertencia", error.message, "warning");

        });

}
