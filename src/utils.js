export const converPrice = (price) => {
    return Math.round(price.substring(1) * 100 )
}