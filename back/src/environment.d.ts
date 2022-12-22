declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_HOST: string;
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      TOKEN_SECRET: string;
    }
  }
}
export {};
