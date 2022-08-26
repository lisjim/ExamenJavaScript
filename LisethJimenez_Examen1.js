var horasOrdinarias=40;
var valorHoraNormal=265.00;
var valorHoraExtra=350.00;
//var horaPersona=53;

function pagoHoras(horaPersona){
    let pagoHoraOrdinaria=0;
    let pagoHoraExtra=0;
    let horasExtra = horaPersona-horasOrdinarias;
    if(horaPersona > horasOrdinarias){
        pagoHoraOrdinaria = horasOrdinarias*valorHoraNormal;
        pagoHoraExtra = horasExtra*valorHoraExtra;
    }
    console.log("El total a pagar por horas laborales normal (40hrs) es de: "+pagoHoraOrdinaria);
    console.log("El total a pagar por horas Extra  "+horasExtra+ "  hrs es de : "+pagoHoraExtra);
}


pagoHoras(53);

