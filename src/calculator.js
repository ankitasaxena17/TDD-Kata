const checkAndReturnCustomDelimitersAndInput = (input) => {
    let customDelimiter = '';
    if (input.startsWith('//')) {
        const parts = input.split('\n');
        customDelimiter = parts[0].substring(2);
        return {
            customDelimiter, delimeterSeperatedInput: parts[1]
        }
    }
    return {customDelimiter, delimeterSeperatedInput: input}
}

export function add(input) {
    // case: empty string
    if(input === "") return 0;

    // case: single value
    if (!isNaN(input)) return Number(input);

    // case: comma seperated values, new line separator and custom delimiter
    const {customDelimiter, delimeterSeperatedInput} =  checkAndReturnCustomDelimitersAndInput(input)
    const delimiters = [',', '\n', customDelimiter];
    const numArray = delimeterSeperatedInput.split(new RegExp(`[${delimiters.join('')}]`)).map(num => Number(num.trim()));

    // case: negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}