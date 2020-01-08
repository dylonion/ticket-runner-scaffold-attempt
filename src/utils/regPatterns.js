const 
    prodNumber = /^[0-9]{6}$/,
    whatever = /[A-Z]+/

export const regPatterns = {
    productNumber: v => prodNumber.test(v),
    what: v => whatever.test(v)
}

export default regPatterns