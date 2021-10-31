/*7. Write a function that return the original message 
from one coded recieved as argument.*/

import ncrypt from 'ncrypt-js';

var encrypted = ()=> {ncrypt.encrypt('This is my secret message', '5')};
encrypted();

var decrypted = ncrypt.decrypt(encrypted);


