class BookList{
    constructor(read,notReadYet,next,current,last) {
        this.readBooks = read;
        this.notReadYet = notReadYet;
        this.next = next;
        this.current = current;
        this.last = last;
        this.all = [];
    }

    add(book){
        this.all.push(book);
    }

    finishCurrentBook(){
        this.notReadYet -= 1;
        this.readBooks = this.current;
        this.last.readDate = new Date(Date.now());
        this.last = this.current;
        this.current = this.next;
        this.last.read = true;
        var i = 0;
        if(this.notReadYet != 0){
            while(this.all[i].read == true || this.all[i] == this.current)
                i++;
            
            this.next = this.all[i];
        }
        else
            return "no hay mas libros para leer";
    }
}

class Book{
    constructor(title,genre,author,read,readDate = "") {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}

window.onload = function(){
    var milista = new BookList();
    document.getElementById("enviarymostrar").addEventListener("click", (e)=>{
        e.preventDefault()
        let titulo = document.getElementById("titulo").value;
        let genero = document.getElementById("genero").value;
        let autor = document.getElementById("autor").value; 
        let leido = document.getElementById("Leido").value; 
        let fecha = document.getElementById("fecha").value;
        var libro = new Book(titulo, genero, autor, leido, fecha);
        milista.add(libro);
        let linueva = document.createElement("li");
        linueva.innerHTML=libro.title+libro.author+libro.genre+libro.read+libro.readDate;
        document.getElementById("lista").appendChild(linueva);
    });
}


function interfaz(){
    document.body.style.background="#42E6A7";
    document.getElementById("contenido").style.textAlign = "center";
    document.getElementById("linea").style.borderRadius = "30px";
    document.getElementById("imagen").style.width = "200px";
    document.getElementById("formulario").style.backgroundColor = "#D1E5DD";
    document.getElementById("formulario").style.width = "300px";
    document.getElementById("formulario").style.margin = "auto";
    document.getElementById("formulario").style.borderRadius = "30px";
    document.getElementById("div").style.backgroundColor = "#D1E5DD";
    document.getElementById("div").style.margin = "auto";
    document.getElementById("div").style.width = "300px";
    document.getElementById("div").style.borderRadius = "30px";
    document.getElementById("div").style.border = "1px solid black";
}

window.addEventListener("load", interfaz);