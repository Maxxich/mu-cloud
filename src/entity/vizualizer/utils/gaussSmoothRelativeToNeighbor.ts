interface IGaussSmooth{
  heights: number[], 
  smoothingFactor: number
}

export const gaussSmoothRelativeToNeighbor = ({
    heights,
    smoothingFactor
}: IGaussSmooth) => {
    const n = heights.length;
    const smoothedHeights = [];
  
    for (let i = 0; i < n; i++) {
        const sigma = (i + 1) * smoothingFactor;
        const gaussCoeffs = Array.from({ length: n }, (_, j) => (
            Math.exp(-((j - i) ** 2) / (2 * sigma ** 2))
        ));
    
        const gaussSum = gaussCoeffs.reduce((sum, coeff) => sum + coeff, 0);
        const normalizedGaussCoeffs = gaussCoeffs.map(coeff => coeff / gaussSum);
    
        const smoothedHeight = heights.reduce((sum, height, j) => (
            sum + height * normalizedGaussCoeffs[j]
        ), 0);
    
        smoothedHeights.push(smoothedHeight);
    }
  
    return smoothedHeights;
}