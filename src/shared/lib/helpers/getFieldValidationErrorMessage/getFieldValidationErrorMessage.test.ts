import { ComplexErrorsObject, ValidationConfig, getFieldValidationErrorMessage } from './getFieldValidationErrorMessage';

const validationConfig: ValidationConfig = {
    password: {
        messages: {
            empty: 'Password should not be empty',
            exceedsMaxLenght: 'Password should not exceeds 10'
        }
    },
    name: {
        messages: {
            empty: 'Name should not be empty',
            exceedsMaxLenght: 'Name should not exceeds 10'
        }
    }
}

const complexErrorsObject1: ComplexErrorsObject = {
    name: {
        empty: false,
        exceedsMaxLenght: false
    },
    password: {
        empty: false,
        exceedsMaxLenght: false
    },
}
const complexErrorsObject2: ComplexErrorsObject = {
    name: {
        empty: false,
        exceedsMaxLenght: true
    },
    password: {
        empty: false,
        exceedsMaxLenght: false
    },
}
const complexErrorsObject3: ComplexErrorsObject = {
    name: {
        empty: false,
        exceedsMaxLenght: false
    },
    password: {
        empty: true,
        exceedsMaxLenght: false
    },
}

const complexErrorsObject4: ComplexErrorsObject = {
    name: {
        empty: false,
        exceedsMaxLenght: true
    },
    password: {
        empty: true,
        exceedsMaxLenght: true
    },
}

describe('getFieldValidationErrorMessage.test', () => {
    test('should return undefined', () => {
        expect(getFieldValidationErrorMessage(undefined, validationConfig)).toBe(undefined);
    });
    test('should return undefined', () => {
        expect(getFieldValidationErrorMessage(complexErrorsObject1, validationConfig)).toBe(undefined);
    });
    test('should return Name should not exceeds 10', () => {
        expect(getFieldValidationErrorMessage(complexErrorsObject2, validationConfig)).toBe('Name should not exceeds 10');
    });
    test('should return Password should not be empty', () => {
        expect(getFieldValidationErrorMessage(complexErrorsObject3, validationConfig)).toBe('Password should not be empty');
    });
    test('should return Name should not exceeds 10', () => {
        expect(getFieldValidationErrorMessage(complexErrorsObject4, validationConfig)).toBe('Name should not exceeds 10');
    });
});
