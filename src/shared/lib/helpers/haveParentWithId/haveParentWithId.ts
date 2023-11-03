export function hasParentWithId(element: HTMLElement, parentId: string) {
    let currentElement: HTMLElement | null = element;
     
    while (currentElement?.parentNode) {
        //@ts-ignore
        if (currentElement.parentNode?.id === parentId) {
            return true;
        }
        currentElement = currentElement.parentNode as HTMLElement
    }
     
    return false;
}