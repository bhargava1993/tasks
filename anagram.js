
var anagram = (str1, str2) => {

    var array1 = str1.split('');
    var array2 = str2.split('');

    let anagram_word = array1.filter(value => array2.includes(value));
    anagram_word = [...new Set(anagram_word)].join('')

    let length = (str1.length - anagram_word.length) + (str2.length - anagram_word.length);
  
    return [length, anagram_word];

}


console.log(anagram("willowpump","urowl"));
console.log(anagram("xy","yab"))
console.log(anagram("hello", ""))
