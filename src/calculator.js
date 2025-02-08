export function add(numbers) {
    // case: empty string
    if(numbers === "") return 0;

    // case: single value
    if (!isNaN(numbers)) return Number(numbers);

    // case: comma seperated values
    const numArray = numbers.split(',').map(num => Number(num.trim()));
    return numArray.reduce((sum, num) => sum + num, 0);
}