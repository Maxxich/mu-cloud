import {
    getNoun
} from './getNoun';

const var1 = 'прослушивание'
const var2 = 'прослушивания'
const var3 = 'прослушиваний'

describe('getNoun.test', () => {
    test(`should return ${var1}, when 0`, () => {
        expect(getNoun(0, var1, var2, var3)).toBe(var3);
    });
    test(`should return ${var1}, when 1`, () => {
        expect(getNoun(1, var1, var2, var3)).toBe(var1);
    });
    test(`should return ${var1}, when 2`, () => {
        expect(getNoun(2, var1, var2, var3)).toBe(var2);
    });
    test(`should return ${var1}, when 3`, () => {
        expect(getNoun(3, var1, var2, var3)).toBe(var2);
    });
    test(`should return ${var1}, when 4`, () => {
        expect(getNoun(4, var1, var2, var3)).toBe(var2);
    });
    test(`should return ${var2}, when 5`, () => {
        expect(getNoun(5, var1, var2, var3)).toBe(var3);
    });
    test(`should return ${var1}, when 6`, () => {
        expect(getNoun(6, var1, var2, var3)).toBe(var3);
    });
    test(`should return ${var1}, when 100`, () => {
        expect(getNoun(100, var1, var2, var3)).toBe(var3);
    });
});
