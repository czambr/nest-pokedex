export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongoDB: process.env.MONGO_DB,
  port: process.env.PORT || 3002,
  defaulLimit: +process.env.DEFAULT_LIMIT || 7,
});
