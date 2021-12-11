import { Entity } from "../../types/Entity";
import { Settings } from "../../types/Settings";
import { EntitiesGenerator } from "./entities-generator";
import { SetupGenerator } from "./setup-generator";
import JSZip from "jszip";
const { saveAs } = require('save-as');

export class AppGenerator {

    static generateApp(entities: Entity[], settings: Settings) {
        var zip = new JSZip();
        var src = zip.folder("src");
        var controllers = src?.folder("controllers");
        // if (entity.current) {
        //   controllers.file(`${entity.current.entity.name}Controller.js`, ControllerGenerator.getTemplate(entity.current.entity, settings.current));
        // }
        SetupGenerator.generateSetup(settings, zip);
        EntitiesGenerator.generateEntities(entities, settings, zip);
        zip.generateAsync({ type: "blob" })
          .then(function (content: any) {
            saveAs(content, settings.project_name + ".zip");
          });
    }
}