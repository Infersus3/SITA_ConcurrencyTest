function licensePlateAt(n) {
    const digits = '0123456789';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const BASE_DIGIT = 10;
    const BASE_LETTER = 26;

    const maxNumberPart = Math.pow(BASE_DIGIT, 6);

    if (n < maxNumberPart) {
        return n.toString().padStart(6, '0');
    } else {
        n -= maxNumberPart;
        let result = '';

        do {
            result = letters[n % BASE_LETTER] + result;
            n = Math.floor(n / BASE_LETTER);
        } while (n > 0);




        return result.padStart(6, '0');
    }
}
