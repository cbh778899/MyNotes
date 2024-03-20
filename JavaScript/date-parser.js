/**
 * Parse given date using formatString, if date not specified, use current time.
 * @param {String} formatString Any string, use DD/MM/YYYY/YY/HH/mm/SS represent each part
 * @param {String} dateString Specify a date to format.
 * @returns Formatted date string
 */
function dateParser(formatString, dateString = 'now') {
    const date = dateString === 'now' ? new Date() : new Date(dateString);
    const formatStrArray = [...formatString]
    Array.from(formatString.matchAll(/(DD|MM|YYYY|YY|HH|mm|SS)/g)).forEach(e=>{
        const match_case = e[0], match_index = e['index'], match_len = match_case.length;
        let replace;
        
        switch(match_case) {
            case 'DD': replace = date.getDate(); break;
            case 'MM':  replace = date.getMonth(); break;
            case 'YYYY':  replace = date.getFullYear(); break;
            case 'YY':  replace = `${date.getFullYear()}`.slice(2); break;
            case 'HH':  replace = date.getHours(); break;
            case 'mm':  replace = date.getMinutes(); break;
            case 'SS':  replace = date.getSeconds(); break;
            default: break;
        }
        replace = `${replace}`.padStart(2, '0');

        formatStrArray.splice(match_index, match_len, ...replace);
    })
    return formatStrArray.join('');
}