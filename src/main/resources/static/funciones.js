/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
function traerDatosCategory(){
    $.ajax ({
                url: "http://localhost:8080/api/Client/all",
                type: "GET",
                dataType: "json",
                succes: function(respuesta){
                    pintarDatos(respuesta);
                }
        
    });
};

function pintarDatos(datos){
    let html="";
    html += "<tr>";
    Object.keys(datos[0]).forEach(element  =>{
        html += "<th>"+element+"</th>";
    });
    html += "</tr>";
    
    $("#tabla").empty();
    $("#tabla").append(html);
    
}

