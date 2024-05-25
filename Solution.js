
/**
 * @param {number[]} input
 * @return {number}
 */
var sumDigitDifferences = function (input) {
    const NUMBER_OF_DIGITS = 10;
    let sumDigitDifferences = 0;

    while (!allDigitsAreProcessed(input)) {
        const frequency = new Array(NUMBER_OF_DIGITS).fill(0);
        calculateFrequencyForDigitPlace(input, frequency);
        sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, input.length);
    }

    return sumDigitDifferences;
};

/**
 * @param {number[]} input
 * @return {boolean}
 */
function allDigitsAreProcessed(input) {
    return input[0] === 0;
}

/**
 * @param {number[]} input
 * @param {number[]} frequency
 * @return {void}
 */
function calculateFrequencyForDigitPlace(input, frequency) {
    for (let i = 0; i < input.length; ++i) {
        ++frequency[input[i] % 10];
        input[i] = Math.floor(input[i] / 10);
    }
}

/**
 * @param {number[]} frequency
 * @param {number} numberOfInputIntegers
 * @return {number}
 */
function calculateSumDigitDifferencesForDigitPlace(frequency, numberOfInputIntegers) {
    let sumDigitDifferences = 0;
    let sumProcessedFrequencies = 0;

    for (let currentFrequency of frequency) {
        if (currentFrequency > 0) {
            sumProcessedFrequencies += currentFrequency;
            sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies);
        }
    }
    return sumDigitDifferences;
}
