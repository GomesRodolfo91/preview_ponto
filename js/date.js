function DAT(){
  
var data, dia, sem, mes , ano, hora, min, seg, mes_alterado;

data = new Date();

dia = data.getDate(); // retorna o dia 

sem = data.getDay(); // retorna o dia da semana. Domingo, o primeiro, tem valor 0 (zero)

mes = data.getMonth(); // retorna o mês. Janeiro é o mês 0 (zero) 

ano = data.getFullYear(); // retorna o ano com 4 dígitos

hora = data.getHours(); // retorna a hora do sistema

min = data.getMinutes(); // retorna os minutos

seg = data.getSeconds(); // retorna os segundos


if (dia < 10){

dia = "0" + dia;

}

if (hora < 10){

  hora = "0" + hora;
  
}
 
if (min < 10){
  
  min= "0" + min;
  
} 
  
if (seg < 10){
  
  seg = "0" + seg;

}

switch (mes) {

  case 0:
    mes_alterado = "Janeiro";
    break;

  case 1:
    mes_alterado = "Fevereiro";
    break;

  case 2:
    mes_alterado = "Março";
    break;

  case 3:
    mes_alterado = "Abril";
    break;

  case 4:
    mes_alterado = "Maio";
    break;

  case 5:
    mes_alterado = "Junho";
    break;

  case 6:
    mes_alterado = "Julho";
    break;

  case 7:
    mes_alterado = "Agosto";
    break

  case 8:
    mes_alterado = "Setembro";
    break;

  case 9:
    mes_alterado = "Outubro";
    break;
    
  case 10:
    mes_alterado = "Novembro";
    break;

  default:
    mes_alterado = "Dezembro";
    break;
}  
 // document.forms[0].elements[0].value="Rio "+dia+" de "+mes+" de "+ano+" "+hora + ":" + min + ":" + seg; 

 document.getElementById("ponto").value = ano+"-0"+(mes+1)+"-"+dia; 
 document.getElementById("data_ponto").innerHTML = "Rio "+dia+" de "+mes_alterado+" de "+ano+" "+hora + ":" + min + ":" + seg; 

}