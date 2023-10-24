export const calculateBulls = (number, guessedNumber) => {
    let bulls = 0;
    number.toString().split('').forEach((item, index) => {
        item === guessedNumber.toString()[index] && bulls++;
    });

    return bulls;
};

export const calculateCows = (number, guessedNumber) => {
    let cows = 0;
    number.toString().split('').forEach(item => {
        guessedNumber.toString().includes(item) && cows++;
    });
    return cows;
};