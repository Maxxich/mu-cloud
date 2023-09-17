interface ISmooth {
  volume: number, 
  prevVolumes:number[], 
  smoothingFactor: number
}

export const gaussSmoothRelativeToPrevious = ({
    prevVolumes,
    smoothingFactor,
    volume
}: ISmooth) => {
    // Добавляем текущее значение громкости в массив предыдущих значений
    prevVolumes.push(volume);
  
    // Определяем размер массива предыдущих значений
    const n = prevVolumes.length;
  
  
    // Вычисляем коэффициенты Гауссовой функции
    const sigma = n * smoothingFactor;
    const gaussCoeffs = Array.from({ length: n }, (_, i) => (
        Math.exp(-((i - n + 1) ** 2) / (2 * sigma ** 2))
    ));
  
    // Нормализуем коэффициенты Гауссовой функции
    const gaussSum = gaussCoeffs.reduce((sum, coeff) => sum + coeff, 0);
    const normalizedGaussCoeffs = gaussCoeffs.map(coeff => coeff / gaussSum);
  
    // Вычисляем сглаженное значение громкости
    const smoothedVolume = prevVolumes.reduce((sum, vol, i) => (
        sum + vol * normalizedGaussCoeffs[i]
    ), 0);
  
    if (n>200){
        prevVolumes.splice(0, 100)
    }

    return smoothedVolume;
}