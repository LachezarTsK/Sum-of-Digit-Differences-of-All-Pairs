
class Solution {

    private companion object {
        const val NUMBER_OF_DIGITS = 10
    }

    fun sumDigitDifferences(input: IntArray): Long {
        var sumDigitDifferences: Long = 0
        while (!allDigitsAreProcessed(input)) {
            val frequency = IntArray(NUMBER_OF_DIGITS)
            calculateFrequencyForDigitPlace(input, frequency)
            sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, input.size)
        }

        return sumDigitDifferences
    }

    private fun allDigitsAreProcessed(input: IntArray): Boolean {
        return input[0] == 0
    }

    private fun calculateFrequencyForDigitPlace(input: IntArray, frequency: IntArray) {
        for (i in input.indices) {
            ++frequency[input[i] % 10]
            input[i] = input[i] / 10
        }
    }

    private fun calculateSumDigitDifferencesForDigitPlace(frequency: IntArray, numberOfInputIntegers: Int): Long {
        var sumDigitDifferences: Long = 0
        var sumProcessedFrequencies = 0

        for (currentFrequency in frequency) {
            if (currentFrequency > 0) {
                sumProcessedFrequencies += currentFrequency
                sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies)
            }
        }
        return sumDigitDifferences
    }
}
