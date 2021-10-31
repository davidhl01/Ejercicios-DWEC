/*Write a function called countTheArgs that can take any number of 
arguments, and returns the number of arguments that are passed in.*/

function countTheArgs(...miarray) {
    return miarray.length
}
document.write(countTheArgs('cat', 'dog'));