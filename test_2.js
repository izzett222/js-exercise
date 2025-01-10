function decrypt(encryptedText, word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = alphabet.toUpperCase();

    function shiftChar(char, shift) {
        if (alphabet.includes(char)) {
            return alphabet[(alphabet.indexOf(char) + shift) % 26];
        } else if (alphabetUpper.includes(char)) {
            return alphabetUpper[(alphabetUpper.indexOf(char) + shift) % 26];
        } else {
            return char;
        }
    }
    
    for (let i = 0; i < 26; i++) {
        let decryptedtext = '';
        for (let j of encryptedText) {
            decryptedtext += shiftChar(j, i)
        }
        
        if (decryptedtext.includes(word)) {
            return decryptedtext
        }
    }
}
