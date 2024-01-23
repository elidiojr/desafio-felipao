let nomeHeroi = "Elidio";
let quantXP = 10001;
let nivelHeroi = "";

switch (true) {
case (quantXP < 1001): 
    nivelHeroi = "Ferro";
    break; 
case (quantXP > 1000 && quantXP < 2001):
    nivelHeroi = "Bronze";
    break;
case (quantXP > 2000 && quantXP < 5001):
    nivelHeroi = "Prata";
    break;
case (quantXP > 5000 && quantXP < 7001):
    nivelHeroi = "Ouro";
    break;
case (quantXP > 7000 && quantXP < 8001):
    nivelHeroi = "Platina";
    break;      
case (quantXP > 8000 && quantXP < 9001):
    nivelHeroi = "Ascendente";
    break;
case (quantXP > 9000 && quantXP < 10001):
    nivelHeroi = "Imortal";
    break;
default:
    nivelHeroi = "Radiante";    
}

console.log("O Herói de nome **{ " + nomeHeroi + " }** está no nível de **{ "+ nivelHeroi + " }**");

