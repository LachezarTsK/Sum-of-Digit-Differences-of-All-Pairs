
public class Solution {

    private static final int NUMBER_OF_DIGITS = 10;

    public long sumDigitDifferences(int[] input) {
        long sumDigitDifferences = 0;
        while (!allDigitsAreProcessed(input)) {
            int[] frequency = new int[NUMBER_OF_DIGITS];
            calculateFrequencyForDigitPlace(input, frequency);
            sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, input.length);
        }

        return sumDigitDifferences;
    }

    private boolean allDigitsAreProcessed(int[] input) {
        return input[0] == 0;
    }

    private void calculateFrequencyForDigitPlace(int[] input, int[] frequency) {
        for (int i = 0; i < input.length; ++i) {
            ++frequency[input[i] % 10];
            input[i] = input[i] / 10;
        }
    }

    private long calculateSumDigitDifferencesForDigitPlace(int[] frequency, int numberOfInputIntegers) {
        long sumDigitDifferences = 0;
        int sumProcessedFrequencies = 0;

        for (int currentFrequency : frequency) {
            if (currentFrequency > 0) {
                sumProcessedFrequencies += currentFrequency;
                sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies);
            }
        }
        return sumDigitDifferences;
    }
}
