/**
 * A regex presentation for email
 * @param {string} email Email case to be tested
 * @returns Boolean value indicates wether the passed pattern is an email
 */
function emailRegex(email) {
    return (
        /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)
    )
}

/**
 * A regex presentation for website url,
 * can match all website urls in string
 * @param {string} str String to be tested
 * @returns An array of any url matching case in the string,  
 * if none, size of that array will be 0
 */
function urlRegex(str) {
    return str.match(/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g)
}