
package main

import (
	"fmt"
)

const NUMBER_OF_DIGITS = 10

func sumDigitDifferences(input []int) int64 {
	var sumDigitDifferences int64 = 0
	for !allDigitsAreProcessed(input) {
		var frequency = make([]int, NUMBER_OF_DIGITS)
		calculateFrequencyForDigitPlace(input, frequency)
		sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, len(input))
	}

	return sumDigitDifferences
}

func allDigitsAreProcessed(input []int) bool {
	return input[0] == 0
}

func calculateFrequencyForDigitPlace(input []int, frequency []int) {
	for i := range input {
		frequency[input[i]%10]++
		input[i] = input[i] / 10
	}
}

func calculateSumDigitDifferencesForDigitPlace(frequency []int, numberOfInputIntegers int) int64 {
	var sumDigitDifferences int64 = 0
	var sumProcessedFrequencies = 0

	for _, currentFrequency := range frequency {
		if currentFrequency > 0 {
			sumProcessedFrequencies += currentFrequency
			sumDigitDifferences += int64(currentFrequency) * int64(numberOfInputIntegers-sumProcessedFrequencies)
		}
	}
	return sumDigitDifferences
}
