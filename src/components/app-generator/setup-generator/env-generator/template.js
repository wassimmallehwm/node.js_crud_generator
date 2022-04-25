const envTemplate = (settings) => {
  const dbConfig = settings.database_config;
  const prefix = 'mongodb://';
  let auth = ''
  let host = 'localhost:27017'
  if (dbConfig.auth) {
    auth = `${dbConfig.user}:${dbConfig.pwd}@`
  }
  if (dbConfig.remote) {
    host = `${dbConfig.host}:${dbConfig.port}`
  }
  const DB_URL = prefix + auth + host

  return `APP_NAME = ${settings.project_name.replace(' ', '_')}
DATABASE_URL = ${DB_URL}
PORT = 3300`;
}

export default envTemplate;