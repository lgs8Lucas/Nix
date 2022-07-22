var b1 = "";
var b2 = "";
var b3 = "";
var b4 = "";
var b5 = "";
var b6 = "";
var b7 = "";
var b8 = "";
var b9 = "";
var vez = 0;
var end = 0;

zera()

function zera(){
    document.getElementById('btn-zera').innerHTML = "Reiniciar Jogo";

    document.getElementById('b1').innerHTML = "&ensp;&ensp;";
    document.getElementById('b2').innerHTML = "&ensp;&ensp;";
    document.getElementById('b3').innerHTML = "&ensp;&ensp;";
    document.getElementById('b4').innerHTML = "&ensp;&ensp;";
    document.getElementById('b5').innerHTML = "&ensp;&ensp;";
    document.getElementById('b6').innerHTML = "&ensp;&ensp;";
    document.getElementById('b7').innerHTML = "&ensp;&ensp;";
    document.getElementById('b8').innerHTML = "&ensp;&ensp;";
    document.getElementById('b9').innerHTML = "&ensp;&ensp;";
    
    b1 = "";
    b2 = "";
    b3 = "";
    b4 = "";
    b5 = "";
    b6 = "";
    b7 = "";
    b8 = "";
    b9 = "";

    vez = 0;
    end = 0;

    defineTexto("É a vez do <b class='color-x'>X</b>")

    document.getElementById('b1').disabled = false;
    document.getElementById('b2').disabled = false;
    document.getElementById('b3').disabled = false;
    document.getElementById('b4').disabled = false;
    document.getElementById('b5').disabled = false;
    document.getElementById('b6').disabled = false;
    document.getElementById('b7').disabled = false;
    document.getElementById('b8').disabled = false;
    document.getElementById('b9').disabled = false;
}

function defineTexto(texto){
    document.getElementById('texto').innerHTML = texto;
}

function zeraVez(){

}

function defineVez(){
    
    if(vez%2 == 0){
        
        defineTexto("É a vez do <b class='color-o'>O</b>")
        vez++;
        return "<b class='color-x'>X</b>";
    }
    else{
        
        defineTexto("É a vez do <b class='color-x'>X</b>")
        vez++;
        return "<b class='color-o'>O</b>";
    }
    
}

function jogada(btn){
    switch (btn){
        case 1:
            if(b1 != "X"&& b1 != "O"){
                let vezT = defineVez();
                document.getElementById('b1').innerHTML = vezT;
                b1 = vezT;
            }
            else{
                alert("Clique em um espaço que ainda não fui usado!")
            }
            break;
        case 2:
            if(b2 != "X"&& b2 != "O"){
                let vezT = defineVez();
                document.getElementById('b2').innerHTML = vezT;
                b2 = vezT;
            }
            else{
                alert("Clique em um espaço que ainda não fui usado!")
            }
            break;
        case 3:
            if(b3 != "X"&& b3 != "O"){
                let vezT = defineVez();
                document.getElementById('b3').innerHTML = vezT;
                b3 = vezT;
            }
            else{
                alert("Clique em um espaço que ainda não fui usado!")
            }
            break;
        case 4:
            if(b4 != "X"&& b4 != "O"){
                let vezT = defineVez();
                document.getElementById('b4').innerHTML = vezT;
                b4 = vezT;
            }
            else{
                alert("Clique em um espaço que ainda não fui usado!")
            }
            break;
        case 5:
            if(b5 != "X"&& b5 != "O"){
                let vezT = defineVez();
                document.getElementById('b5').innerHTML = vezT;
                b5 = vezT;
            }
            else{
                alert("Clique em um espaço que ainda não fui usado!")
            }
            break;
        case 6:
            if(b6 != "X"&& b6 != "O"){
                let vezT = defineVez();
                document.getElementById('b6').innerHTML = vezT;
                b6 = vezT;
            }
            else{
                alert("Clique em um espaço que ainda não fui usado!")
            }
            break;
        case 7:
            if(b7 != "X"&& b7 != "O"){
                let vezT = defineVez();
                document.getElementById('b7').innerHTML = vezT;
                b7 = vezT;
            }
            else{
                alert("Clique em um espaço que ainda não fui usado!")
            }
            break;
        case 8:
            if(b8 != "X"&& b8 != "O"){
                let vezT = defineVez();
                document.getElementById('b8').innerHTML = vezT;
                b8 = vezT;
            }
            else{
                alert("Clique em um espaço que ainda não fui usado!")
            }
            break;
        case 9:
            if(b9 != "X"&& b9 != "O"){
                let vezT = defineVez();
                document.getElementById('b9').innerHTML = vezT;
                b9 = vezT;
            }
            else{
                alert("Clique em um espaço que ainda não fui usado!")
            }
            break;
    }
    checaFim();
}

function checaFim(){
    if(b1 == b2 && b2 == b3 && b3 !=""){
        defineTexto("O " +b1+" Venceu!");
        disable();
    }
    else if(b4 == b5 && b5 == b6 && b6 !=""){
        defineTexto("O " +b4+" Venceu!");
        disable();
    }
    else if(b7 == b8 && b8 == b9 && b9 !=""){
        defineTexto("O " +b7+" Venceu!");
        disable();
    }
    if(b1 == b4 && b4 == b7 && b7 !=""){
        defineTexto("O " +b1+" Venceu!");
        disable();
    }
    else if(b2 == b5 && b5 == b8 && b8 !=""){
        defineTexto("O " +b2+" Venceu!");
        disable();
    }
    else if(b3 == b6 && b6 == b9 && b9 !=""){
        defineTexto("O " +b3+" Venceu!");
        disable();
    }
    else if(b1 == b5 && b5 == b9 && b9 !=""){
        defineTexto("O " +b1+" Venceu!");
        disable();
    }
    else if(b3 == b5 && b5 == b7 && b7 !=""){
        defineTexto("O " +b7+" Venceu!");
        disable();
    }
    else if( vez == 9){
        defineTexto("Deu Velha!");
        disable();
    }

}

function disable(){
    document.getElementById('b1').disabled = true;
    document.getElementById('b2').disabled = true;
    document.getElementById('b3').disabled = true;
    document.getElementById('b4').disabled = true;
    document.getElementById('b5').disabled = true;
    document.getElementById('b6').disabled = true;
    document.getElementById('b7').disabled = true;
    document.getElementById('b8').disabled = true;
    document.getElementById('b9').disabled = true;
    document.getElementById('btn-zera').innerHTML = "Jogar novamente";
}















