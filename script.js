var userWord = prompt('inserisci una parola');

while (!userWord || userWord.trim()===''){
    userWord = prompt('inserisci una parola');
}
    
userWord = userWord.trim().toLowerCase();

var reversedWord = reverseWord(userWord);

if (reversedWord === userWord){
    console.log('la parola ' + userWord + ' è palindroma');
} else {
    console.log('la parola ' + userWord + ' non è palindroma');
}

function reverseWord(word){
    var reversedWord = '';

    for (var i = word.length - 1; i >= 0; i--){
        var currentLetter = word[i];
        reversedWord += currentLetter;
    }

    return reversedWord;
}

