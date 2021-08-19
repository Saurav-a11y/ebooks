export const convertToNrs = (price) => {
    return Math.round(price.substring(1) * 100 )
}