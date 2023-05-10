/* eslint-disable spaced-comment */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_URL: string
  readonly API_URL_PRODUCTION: string
  readonly CRYPTO_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
