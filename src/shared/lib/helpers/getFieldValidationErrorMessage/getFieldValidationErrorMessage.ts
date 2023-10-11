type ErrorsObject = Record<string, boolean>
export type ComplexErrorsObject = Record<string, ErrorsObject>

type ErrorMessagesObject = Record<string, string>
type FieldObject = {
    messages: ErrorMessagesObject,
} & Record<string, any>

export type ValidationConfig = Record<string, FieldObject>

export function getFieldValidationErrorMessage(
    complexErrorsObject: ComplexErrorsObject | undefined,
    config: ValidationConfig
): string | undefined {
    if (!complexErrorsObject) return undefined

    const complexErrorsObjectEntries = Object.entries(complexErrorsObject)

    let message = undefined

    for (let complexErrorsObjectEntry in complexErrorsObjectEntries) {
        const [ErrorsObjectKey, ErrorsObject]: [string, Record<string, boolean>] 
            = complexErrorsObjectEntries[complexErrorsObjectEntry] 
        const ErrorsObjectEntries = Object.entries(ErrorsObject)
        for (let error in ErrorsObjectEntries) {
            const [errorKey, flag]: [string, boolean] = ErrorsObjectEntries[error]
            if (flag) {
                message = config[ErrorsObjectKey].messages[errorKey]
            }
            if (message) break
        }
        if (message) break
    }

    return message
}