/**
 * congrats.js - Script to decode a ROT13 encoded message
 * 
 * ROT13 (rotate by 13 places) is a simple letter substitution cipher
 * that replaces a letter with the letter 13 letters after it in the alphabet.
 * It works by rotating each letter by 13 positions in the alphabet,
 * wrapping back to the beginning if necessary.
 */

// The encoded message
const encodedMessage = 'Pbatenghyngvbaf ba ohvyqvat n pbqr-rqvgvat ntrag!';

/**
 * Decodes a ROT13 encoded string
 * @param {string} encodedStr - The ROT13 encoded string
 * @returns {string} - The decoded string
 */
function decodeRot13(encodedStr) {
    return encodedStr.replace(/[a-zA-Z]/g, function(char) {
        // Get the ASCII code of the character
        const code = char.charCodeAt(0);
        
        // Handle uppercase letters (ASCII: 65-90)
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + 13) % 26) + 65);
        }
        // Handle lowercase letters (ASCII: 97-122)
        else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + 13) % 26) + 97);
        }
        // Non-alphabetic characters remain unchanged
        return char;
    });
}

// Decode and print the message
const decodedMessage = decodeRot13(encodedMessage);
console.log('Encoded message:', encodedMessage);
console.log('Decoded message:', decodedMessage);