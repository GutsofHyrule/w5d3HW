// palindrome


// function palindrome(str){
    
//     str= str.toLowerCase();
//     for(var i = 0; i < str.length; i++){
//         str = str.replace(' ','');
//         str= str.replace(',', '');
//         str= str.replace('.', '');
//         str = str.replace('/','');
//         str = str.replace('_','');
//         str = str.replace('-','');
//         str = str.replace('(','');
//         str = str.replace(')','');
//     }
//  var copy = str.split('').reverse().join('');
//  if(copy == str){
//      return true;
// }else{
//     return false
// }
    
// }
// palindrome('eye')


// boo who

// function boo(bool){
// if (typeof(bool) === "boolean"){
//     return true;
// }else{
//     return false;
// }
// }

// boo(null)

// pig latin

// function translate(str){
//     var letters = str.split('');
//     var vowelRagex = /[aeiou]/;

//     if(vowelragex.test(letters[0])){
//     return letters.join("") + "way";
// }
// while(true){
//     if(!vowelRagex.test(letters[0])){
//         letters.push(letter.splice(0,1));
//     }else{
//         break
//     }
// }
//     str = letters.join('') + 'ay';
//     return str
// }
// translate('poop');