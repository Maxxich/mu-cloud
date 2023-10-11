import { checkError } from './checkError';

const errorObj1 = {
    empty: false,
    exceedsMaxLenght: false
}

const errorObj2 = {
    empty: true,
    exceedsMaxLenght: false
}
const errorObj3 = {
    empty: false,
    exceedsMaxLenght: true
}

const errorObj4 = {
    empty: false,
    exceedsMaxLenght: true
}

describe('checkError.test', () => {
    test('should return false', () => {
        expect(checkError(errorObj1)).toBe(false);
    });
    test('should return true', () => {
        expect(checkError(errorObj2)).toBe(true);
    });
    test('should return true', () => {
        expect(checkError(errorObj3)).toBe(true);
    });
    test('should return true', () => {
        expect(checkError(errorObj4)).toBe(true);
    });
});
