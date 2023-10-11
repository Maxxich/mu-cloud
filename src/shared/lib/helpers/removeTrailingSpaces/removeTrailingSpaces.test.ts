import { removeTrailingSpaces } from './removeTrailingSpaces'


const var1 = 'прослушивание    '
const var2 = 'прослушивания '
const var3 = 'прослушивани й'
const var4 = 'прослу  шивани й'

describe('removeTrailingSpaces.test', () => {
    test('should return', () => {
        expect(removeTrailingSpaces(var1)).toBe('прослушивание');
    });
    test('should return1', () => {
        expect(removeTrailingSpaces(var2)).toBe('прослушивания');
    });
    test('should return', () => {
        expect(removeTrailingSpaces(var3)).toBe('прослушивани й');
    });
    test('should return', () => {
        expect(removeTrailingSpaces(var4)).toBe('прослу  шивани й');
    });
});
