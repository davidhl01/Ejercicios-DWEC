/*2. Over an array with names, find all entries whose firstname starts with 'J', 
create projection combined of only the initials of the name and then sort alphabetically.*/

nombres = ['Juan', 'José', 'Paco', 'David', 'Javi', 'Aarón'];
llevaj = [];

nombres.forEach(element => {
    if (element[0] == 'J'){
        llevaj.push(element);
    }
});
document.write(llevaj);

//Initials

ini = [];

nombres.forEach(element => {
    ini.push(element[0]);
});
console.log(ini);
