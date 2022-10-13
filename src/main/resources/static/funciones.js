function traerDatosCat(){
    $.ajax({
        url: "http://144.22.181.243:8080/api/Category/all",
        type:"GET",
        dataType: 'json',
        success: function(respuesta){
            pintarDatos(respuesta);
        }
    });
}

function pintarDatos(datos){
    let html="";
    html+="<tr>";
    Object.keys(datos[0]).forEach(elemento => {
        html+="<th>"+elemento+"</th>";
    });
    html+="</tr>";

    for(let i=0;i<datos.length;i++){
        html+="<tr>";
        Object.values(datos[i]).forEach(elemento => {
            html+="<td>"+elemento+"</td>";
        });
        html+="</tr>";
    }

    $("#tabla").empty();
    $("#tabla").append(html);
}