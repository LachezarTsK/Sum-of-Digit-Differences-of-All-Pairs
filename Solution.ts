
function sumDigitDifferences(input: number[]): number {
    const NUMBER_OF_DIGITS = 10;
    let sumDigitDifferences = 0;

    while (!allDigitsAreProcessed(input)) {
        const frequency: number[] = new Array(NUMBER_OF_DIGITS).fill(0);
        calculateFrequencyForDigitPlace(input, frequency);
        sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, input.length);
    }

    return sumDigitDifferences;
};

function allDigitsAreProcessed(input: number[]): boolean {
    return input[0] === 0;
}

function calculateFrequencyForDigitPlace(input: number[], frequency: number[]): void {
    for (let i = 0; i < input.length; ++i) {
        ++frequency[input[i] % 10];
        input[i] = Math.floor(input[i] / 10);
    }
}

function calculateSumDigitDifferencesForDigitPlace(frequency: number[], numberOfInputIntegers: number): number {
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
