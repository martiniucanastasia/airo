interface ImportMetaEnv {
  // add env vite variables here
  readonly VITE_WEATHERBIT_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
