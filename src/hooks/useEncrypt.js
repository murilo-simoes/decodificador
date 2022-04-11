import { dicionaryZenit, dicionaryRot } from './dicionary'

const useEncrypt = () => {

    const encryptData = (key, data) => {
        let cripted = ''
        let arrLetters = data.split('')

        console.log(arrLetters)

        if(key === 'zenit') {
           for(let i = 0; i < arrLetters.length; i++) {
               cripted += dicionaryZenit(arrLetters[i])
           }
            return cripted
        } else {
            for(let i = 0; i < arrLetters.length; i++) {
                cripted += dicionaryRot(arrLetters[i])
            }
            return cripted
        }
    }

    const decryptData = (key, data) => {
        let cripted = ''
        let arrLetters = data.split('')

        if(key === 'zenit') {
            for(let i = 0; i < arrLetters.length; i++) {
                cripted += dicionaryZenit(arrLetters[i])
            }

            return cripted
        } else {
            for(let i = 0; i < arrLetters.length; i++) {
                cripted += dicionaryRot(arrLetters[i])
            }
            return cripted
        }
    }

    return {
        encryptData,
        decryptData
    }

}

export default useEncrypt;
