
using System;

public class Solution
{
    private static readonly int NUMBER_OF_DIGITS = 10;

    public long SumDigitDifferences(int[] input)
    {
        long sumDigitDifferences = 0;
        while (!AllDigitsAreProcessed(input))
        {
            int[] frequency = new int[NUMBER_OF_DIGITS];
            CalculateFrequencyForDigitPlace(input, frequency);
            sumDigitDifferences += CalculateSumDigitDifferencesForDigitPlace(frequency, input.Length);
        }

        return sumDigitDifferences;
    }

    private bool AllDigitsAreProcessed(int[] input)
    {
        return input[0] == 0;
    }

    private void CalculateFrequencyForDigitPlace(int[] input, int[] frequency)
    {
        for (int i = 0; i < input.Length; ++i)
        {
            ++frequency[input[i] % 10];
            input[i] = input[i] / 10;
        }
    }

    private long CalculateSumDigitDifferencesForDigitPlace(int[] frequency, int numberOfInputIntegers)
    {
        long sumDigitDifferences = 0;
        int sumProcessedFrequencies = 0;

        foreach (int currentFrequency in frequency)
        {
            if (currentFrequency > 0)
            {
                sumProcessedFrequencies += currentFrequency;
                sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies);
            }
        }
        return sumDigitDifferences;
    }
}
