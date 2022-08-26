class Persona{
    nombre;
    apellido;
    edad;
    constructor(nombre="Liseth", apellido="Jimenez", edad="28"){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getDetalles(){
        console.log(this.nombre+ " "+ this.apellido+ " de "+this.edad+" años");
    }

}

class Empleado extends Persona{
    tipo;
    constructor(tipo="C",nombre="Bruno", apellido="Herrera", edad="30"){
        super(nombre, apellido, edad);
        this.tipo = tipo;
    }
    getDetalles(){
        super.getDetalles();
        if(this.tipo=="C"){
            console.log(this.nombre+ " "+ this.apellido+ " de "+this.edad+" años  - "+ this.tipo+" Empleado de Confianza");
        }
        if(this.tipo=="S"){
            console.log(this.nombre+ " "+ this.apellido+ " de "+this.edad+" años  - "+ this.tipo+" Empleado de Sindicato");
        }
    }

}



class Nomina {
 empleado=[];

 constructor(empleado){
    this.empleado=empleado;
 }

 calcularNomina(){
    let listaempleado = new Nomina(empleados);
    //console.log(listaempleado.empleado.length);
    for (let fila = 0; fila < listaempleado.empleado.length; fila++) {
        let dias = Math.floor((Math.random() * (16-5))+5);
        //console.log(dias);
        //console.log(listaempleado.empleado[fila].tipo);
       //num es ahora un número entre 5 y 15, ambos incluidos.
 
        if(listaempleado.empleado[fila].tipo=="C"){

            console.log(listaempleado.empleado[fila].nombre+ " "+ listaempleado.empleado[fila].apellido+ " de "+listaempleado.empleado[fila].edad+" años  - "+ listaempleado.empleado[fila].tipo+" Empleado de Confianza con un sueldo de "+((dias*350)-((dias*350)*0.13))+" por "+dias+" dias trabajado.");
        }
        if(listaempleado.empleado[fila].tipo=="S"){
            console.log(listaempleado.empleado[fila].nombre+ " "+ listaempleado.empleado[fila].apellido+ " de "+listaempleado.empleado[fila].edad+" años  - "+ listaempleado.empleado[fila].tipo+" Empleado de Sindicato con un sueldo de "+((dias*500)-((dias*500)*0.10))+" por "+dias+" dias trabajado.");
        }
     }

 }


}

var empleados=[];
empleados.push(new Empleado("S","Angee","Perez","23"));
empleados.push(new Empleado("C","Alvaro","Jimenez","25"));
empleados.push(new Empleado("C","Ana","Valencia","30"));

let e = new Nomina();
e.calcularNomina();