
#include <span>
#include <array>
#include <vector>
using namespace std;

class Solution {

    static const int NUMBER_OF_DIGITS = 10;

public:
    long long sumDigitDifferences(vector<int>& input) const {
        long sumDigitDifferences = 0;
        while (!allDigitsAreProcessed(input)) {
            array<int, NUMBER_OF_DIGITS> frequency{};
            calculateFrequencyForDigitPlace(input, frequency);
            sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, input.size());
        }

        return sumDigitDifferences;
    }

private:
    bool allDigitsAreProcessed(span<const int> input) const {
        return input[0] == 0;
    }

    void calculateFrequencyForDigitPlace(span<int> input, span<int> frequency) const {
        for (size_t i = 0; i < input.size(); ++i) {
            ++frequency[input[i] % 10];
            input[i] = input[i] / 10;
        }
    }

    long calculateSumDigitDifferencesForDigitPlace(span<const int> frequency, int numberOfInputIntegers) const {
        long sumDigitDifferences = 0;
        int sumProcessedFrequencies = 0;

        for (const auto& currentFrequency : frequency) {
            if (currentFrequency > 0) {
                sumProcessedFrequencies += currentFrequency;
                sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies);
            }
        }
        return sumDigitDifferences;
    }
};
