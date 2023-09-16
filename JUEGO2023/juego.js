$(document).ready(function (){
    var valor_dado = 0;
    var pts1 = 0;
    var pts2 = 0;
    var tiradas = 1;
    var winner = 0;
    $("#boton").click(function (e){
        valor_dado = Math.floor(Math.random()*6+1)
        console.log("Sacaste un: " + valor_dado)
        $("#dado").attr("src", "imagenes/dado" + valor_dado + ".png")
        $("#numero").html(valor_dado)
        if(tiradas <= 3){
            pts1 += valor_dado;
            console.log("Los puntos del jugador 1 es de: " + pts1)
            $("#pts1").html(pts1)
            tiradas++;
        }else{
            pts2 += valor_dado;
            console.log("Los puntos del jugador 2 es de: " + pts2)
            $("#pts2").html(pts2)
            tiradas++;
        }
        if(tiradas == 7){
            if(pts1 > pts2){
                console.log("Ganó el jugador 1");
                winner = 1;
                $("#winner").html(winner)
                pts1 = 0;
                pts2 = 0;
                $("#pts1").html(pts1)
                $("#pts2").html(pts2)
            }else if(pts2 > pts1){
                console.log("Ganó el jugador 2");
                winner = 2;
                $("#winner").html(winner)
                pts1 = 0;
                pts2 = 0;   
                $("#pts1").html(pts1)
                $("#pts2").html(pts2)
            }else if(pts1 == pts2){
                console.log("Se eligió al azar que el ganador es: " + Math.floor(Math.random()*2+1));
            }
            tiradas = 1;
        }
    })
})