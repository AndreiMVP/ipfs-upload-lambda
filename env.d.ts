declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FILEBASE_TOKEN: string;
      AMQP_URL: string;
      AMQP_EXCHANGE: string;
    }
  }
}

export {}
