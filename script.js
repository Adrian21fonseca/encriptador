document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    var textoInput = document.getElementById('texto');
    var botonEncriptar = document.querySelector('.botonEncriptar');
    var botonDesencriptar = document.querySelector('.botonDesencriptar');
    var botonCopiar = document.querySelector('.botonCopiar');

    // Función para encriptar texto
    function encriptarTexto(texto) {
        var textoEncriptado = texto.replace(/a/g, 'ai')
                                    .replace(/e/g, 'enter')
                                    .replace(/i/g, 'imes')
                                    .replace(/o/g, 'ober')
                                    .replace(/u/g, 'ufat');
        return textoEncriptado;
    }

    // Función para desencriptar texto
    function desencriptarTexto(textoEncriptado) {
        var textoDesencriptado = textoEncriptado.replace(/ufat/g, 'u')
                                                .replace(/ober/g, 'o')
                                                .replace(/imes/g, 'i')
                                                .replace(/enter/g, 'e')
                                                .replace(/ai/g, 'a');
        return textoDesencriptado;
    }

    // Función para copiar texto al portapapeles
    function copiarTexto() {
        navigator.clipboard.writeText(textoInput.value).then(function() {
            alert('Texto copiado al portapapeles');
        }, function() {
            alert('Error al copiar texto al portapapeles');
        });
    }

    // Evento para encriptar texto
    botonEncriptar.addEventListener('click', function() {
        var textoOriginal = textoInput.value;
        var textoEncriptado = encriptarTexto(textoOriginal);
        textoInput.value = textoEncriptado;
    });

    // Evento para desencriptar texto
    botonDesencriptar.addEventListener('click', function() {
        var textoEncriptado = textoInput.value;
        var textoDesencriptado = desencriptarTexto(textoEncriptado);
        textoInput.value = textoDesencriptado;
    });

    // Evento para copiar texto
    botonCopiar.addEventListener('click', copiarTexto);
});
