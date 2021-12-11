import initSettings from '../../../../initial_settings.json'
const packTemplate = (settings) => {
    let dependencies = '';

    initSettings.init_dependencies.forEach(element => {
        if(!settings.dependencies.find(elem => elem.name === element.name)){
            settings.dependencies.push(element)
        }
    });
    if (settings.dependencies.length > 0) {
        settings.dependencies.forEach((element, i) => {
            dependencies += settings.dependencies.length - 1 == i ?
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