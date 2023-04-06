import CryptoJS from 'crypto-js'

let cryptoJS: typeof CryptoJS | null = null

if (typeof CryptoJS === 'object') {
  cryptoJS = CryptoJS
}

export const useEncryption = (secretKey: string) => {
  const encryptValue = (value: string) => {
    process.env.NODE_ENV === 'development' &&
      console.log('Загаданное слово:', value)

    try {
      if (cryptoJS) {
        return cryptoJS.AES.encrypt(value, secretKey).toString()
      } else {
        console.error('CryptoJS library is not available')
        return ''
      }
    } catch (error) {
      console.error(error)
      return ''
    }
  }

  const decryptValue = (value: string) => {
    try {
      if (cryptoJS) {
        return cryptoJS.AES.decrypt(value, secretKey).toString(
          cryptoJS.enc.Utf8,
        )
      } else {
        console.error('CryptoJS library is not available')
        return ''
      }
    } catch (error) {
      console.error(error)
      return ''
    }
  }

  return {
    encryptValue,
    decryptValue,
  }
}
