import CryptoJS from 'crypto-js'

const useEncryption = (secretKey: string) => {
  const encryptValue = (value: string) => {
    try {
      return CryptoJS.AES.encrypt(value, secretKey).toString()
    } catch (error) {
      console.error(error)
      return ''
    }
  }

  const decryptValue = (value: string) => {
    try {
      return CryptoJS.AES.decrypt(value, secretKey).toString(CryptoJS.enc.Utf8)
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

export default useEncryption
