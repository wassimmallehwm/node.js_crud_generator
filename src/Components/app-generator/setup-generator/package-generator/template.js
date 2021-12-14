import initSettings from '../../../../initial_settings.json'
const packTemplate = (settings) => {
    let dependencies = '';
    let depArray = settings.dependencies;

    initSettings.init_dependencies.forEach(element => {
      if(!depArray.find(elem => elem.name === element.name)){
        depArray.push(element)
      }
    });
    if (depArray.length > 0) {
        depArray.forEach((element, i) => {
            dependencies += depArray.length - 1 == i ?
        `"${element.name}" : "${element.version}"` : 
        `"${element.name}" : "${element.version}",
        `
        });
    }

    return `
    {
      "name": "${settings.project_name}",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "start": "node index.js"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        ${dependencies}
      }
    }`
}

export default packTemplate;