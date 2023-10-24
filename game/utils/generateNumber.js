export const generateNumber = () => {
    let number = '';
    while(true) {
        let unique = (Math.random() * 10).toFixed();
        if (!number.includes(unique)) {
            number += unique;
        }
        if (number.length === 4) {
            break;
        }
    }
    return number;    
};