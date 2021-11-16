function Ejercicio5(nombre){
    contador =0
    for (let i=0; i<nombre.length; i++){
        return nombre[i];
    };
    contador+=1
};

nombre = 'Chicago'; 
document.write(Ejercicio5(nombre));



var array = [[1,3],[4,2],[2,1]];

function Ejercicio6(array){
    for (let i=0; i<array.length; i++){
        return array[i];

    }
}

console.log(Ejercicio6(array));



function Ejercicio7(){
    document.getElementById('parrafo').style.fontSize="14";
    document.getElementById('parrafo').style.color="red";
    document.getElementById('parrafo').style.backgroundColor="yellow";
    document.getElementById('parrafo').style.fontFamily="Comic Sans MS";
};

window.addEventListener("load", Ejercicio7);


//comandos git hub: 
/*git init

git add examendwec

git commit -m "first commit"

git remote add origin https://github.com/davidhl01/Ejercicios-DWEC.git

git push -u origin master*/