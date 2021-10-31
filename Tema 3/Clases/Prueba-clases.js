class Alumno{
    constructor(name, surname, course)
    {
        this.nombre = name;
        this.apellidos = surname;
        this.curso = course;
    }

    imprimeDatos()
    {
        console.log(`El alumno ${this.nombre} ${this.apellidos} pertenece a ${this.curso}`);
    }

    despertar(segundos)
    {
        setTimeout( () => {
            console.log(`Acaba de despertarse ${this.nombre}`)
        } , segundos*1000);
    }
}

class AlumnoCiclos extends Alumno
{
    constructor(nom, ape, curso, nivFrikismo)
    {
        super(nom, ape, curso);
        this.frikometro = nivFrikismo;
    }

    getInfor()
    {
        super.imprimeDatos();
        console.log(` y su nivel de friki es: ${this.frikometro}`);
    }
}

let al1 = new Alumno('Carlos', 'Moreno', '2º Bach');
al1.imprimeDatos();
let al2 = new Alumno('Pablo', 'Moreno', '1º ESO');
al2.imprimeDatos();
console.log(al2.nombre);
al2.despertar(2);
al1.despertar(3);
let al3 = new AlumnoCiclos('José', 'Duarte', '2DAW', 100);
al3.getInfor();