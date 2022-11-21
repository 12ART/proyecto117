$(document).ready(function(){

    console.log('Listo')

    //  Obtén la fecha actual y actualízala en el DOM.
    let date_time = new Date()
    let current_date = date_time.toLocaleDateString()

    $('#date').text("Fecha: " + current_date)

    //  Escribe un evento, cuando se hace clic en el botón eviar.
    $('#button').click(function(){

        //  Obtén el valor del texto, del área de texto, con el método 'val()'.
        let review = $('#text').val()
        console.log(review)

        //  Conviértelo en un objeto JS.
        //  Proporciona una 'clave' aquí y en escribe lo mismo en el archivo app.py; también para extraer los datos.
        let input_data = {'customer_review' : review}
        console.log(input_data)

        //  Requerimiento AJAX.
        $.ajax({

            url: "/predict",
            //  Tipo de requerimiento web.
            type : 'POST',

            //  Datos a ser enviados en formato JSON.
            data : JSON.stringify(),

            //  Tipo de respuesta esperada en JSON.
            dataType : 'json',

            //  contentType - (tipo de contenido).
            contentType : 'application/json',

            //  Si todo es exitoso, ejecuta esta función.
            success : function(result){

                // Extrae la predicción y la URL del emoticón del resultado.
                let prediction = result.prediction
                let emoji_url = result.url
                console.log(emoji_url)

                //  Actualiza los elementos del DOM.
                $('#sentiment').text(prediction)
                $('#sentiment').show()

                //  Muestra los elementos.
                $('#emoji').attr('scr', emoji_url)
                $('#emoji').show()

            },

            //  Si hay algún error, ejecuta esta función.
            error : function(result){

                console.log(result)
            }
        })


        //  Borra el cuadro de texto después de cada clic en el botón.
        $('#text').val("")
    })
        
})