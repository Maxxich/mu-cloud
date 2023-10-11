export const formatListenings = (listenings: number) => {
    if (listenings >= 1000 && listenings < 1000000) {
        return (Math.floor(listenings/100)/10) + 'K'
    }
    if (listenings >= 1000000 ) {
        return (Math.floor(listenings/100000)/10) + 'M'
    }
    return listenings
}