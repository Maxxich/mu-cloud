export function decreaseColorIntensity(color: string, factor: number): string {
    let modifiedColor = color.toLowerCase();
    
    // Если цвет в формате RGB или RGBA
    if (modifiedColor.startsWith('rgb')) {
        const values = modifiedColor.match(/\d+/g);
        if (values) {
            const modifiedValues = values.map(value => Math.round(parseInt(value) / factor));
            modifiedColor = `rgb${modifiedValues.length === 4 ? 'a' : ''}(${modifiedValues.join(', ')})`;
        }
    }
    
    // Если цвет в формате HEX
    if (modifiedColor.startsWith('#')) {
        const hex = modifiedColor.slice(1);
        const rgb = hex.match(/.{1,2}/g);
        if (rgb) {
            const modifiedRgb = rgb.map(value => {
                const intValue = parseInt(value, 16);
                const modifiedValue = Math.round(intValue / factor);
                return modifiedValue.toString(16).padStart(2, '0');
            });
            modifiedColor = `#${modifiedRgb.join('')}`;
        }
    }
    
    return modifiedColor;
}