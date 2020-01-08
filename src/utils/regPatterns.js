const 
    projNumber = /^[0-9]{6}$/,
    previousSF = /^[0-9]{1}$/

export const regPatterns = {
    isProjectNumber: v => projNumber.test(v),
    isPreviousSF: v => previousSF.test(v),
    isTitle: v => v.length <= 200,
    isIntroduction: (v) => {
        let countWords = v.trim().split(/\s+/).length
        if(countWords <= 5) {
            return true
        }else{
            return false
        }
    }
}

export default regPatterns