const envTemplate = (settings) => {

  return `APP_NAME = ${settings.project_name}
DATABASE_URL = mongodb://localhost:27017/${settings.project_name.replace(' ', '_')}
PORT = 3300`;
}

export default envTemplate;