const palindromes = function (str1) {
    
    const alphanumerical = "abcdefghijklmnopqrztuvwyxz1234567890";

    originalString = str1.toLowerCase().split('').filter((character) => alphanumerical.includes(character)).join('');
    reversedString = str1.toLowerCase().split('').reverse().filter((character) => alphanumerical.includes(character)).join('');

    return originalString == reversedString;

};

// Do not edit below this line
module.exports = palindromes;
