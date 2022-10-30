const daySemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
const d = new Date();
let day = daySemana[d.getDay()];
if (day == ["Domingo"]){
document.write ("<h1> Promoção!</h1>" + "Assine qualquer plano hoje e receba 30 dias grátis")}
else{
    document.write("Bem vindo!")
}