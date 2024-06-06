const NUMBER = 0b100
const LOWERCASE_LETTER = 0b010
const UPPERCASE_LETTER = 0b001

/**
 * @param {number} length Length of the final string to be generated
 * @param {number} included_cases Cases to be included in the generated string, see examples
 * @returns The final string to be generated
 * 
 * @description `NUMBER = 0b100`, `LOWERCASE_LETTER = 0b010`, `UPPERCASE_LETTER = 0b001`, use for bitwise trick to find which cases are selected
 * 
 * @example
 * // generate a string length at 12 which includes number, lowercase letters and uppercase letters
 * generateRandomString(12, NUMBER | LOWERCASE_LETTER | UPPERCASE_LETTER);
 * // or simply
 * generateRandomString(12, 0b111);
 */
function generateRandomString(length = 10, included_cases = NUMBER | LOWERCASE_LETTER) {
    // some bitwise trick so that we know which cases are selected use only index of 'cases' string
    const cases = included_cases.toString(2).padStart(3, '0')
    // empty string to be appended
    let output_str = ''
    
    // while length is not 0, generate random string and append to out returning string
    do {
        let new_string;
        // if number only, just generate random number is fine
        if(cases === '100') {
            // generate a random number, simply convert to string, slice 2 to delete '0.' before the string
            new_string = Math.random().toString().slice(2)
        } else {
            // generate a random number, to base36 so we have both number and lowercase letters, slice 2 to delete '0.' before the string
            new_string = Math.random().toString(36).slice(2)
            // if not included number, delete all number
            if(!+cases[0]) new_string = new_string.replace(/\d+/g, '');
            // if do has upper case letter
            if(+cases[2]) {
                // if there's no lowercase letter, just call toUpperCase()
                if(!+cases[1]) new_string = new_string.toUpperCase();
                // if still keep lowercase letter, 0.5 means we have half chance for this index to become uppercase
                else new_string = [...new_string].map(e=>Math.random() <= .5 ? e.toUpperCase() : e).join('')
            }
        }

        // decide how long we gonna slice the generated string
        const slice_len = Math.min(new_string.length, length);
        // append the sliced generated string
        output_str += new_string.slice(0, slice_len);
        // reduce length by sliced length so we can use it in next loop or break the loop
        length -= slice_len;
    } while(length > 0)

    return output_str;
}

// try it
console.log(generateRandomString())
console.log(generateRandomString(20, NUMBER))
console.log(generateRandomString(10, UPPERCASE_LETTER | LOWERCASE_LETTER))
console.log(generateRandomString(8, UPPERCASE_LETTER | LOWERCASE_LETTER | NUMBER))