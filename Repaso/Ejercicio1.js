//Integer to Roman.

/**
 * @param {number} num
 * @return {string}
 */

// numeros = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};

var romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  
  var intToRoman = function(num) {
      if (num === 0) {
      return '';
    }
    for (var i = 0; i < romanMatrix.length; i++) {
      if (num >= romanMatrix[i][0]) {
        return romanMatrix[i][1] + intToRoman(num - romanMatrix[i][0]);
      }
    }
  };