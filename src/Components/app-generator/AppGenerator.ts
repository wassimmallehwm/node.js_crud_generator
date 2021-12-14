import { Entity } from "../../types/Entity";
import { Settings } from "../../types/Settings";
import { EntitiesGenerator } from "./entities-generator";
import { SetupGenerator } from "./setup-generator";
import JSZip from "jszip";
const { saveAs } = require('save-as');

export class AppGenerator {

  static generateApp(entities: Entity[], settings: Settings) {
    var zip = new JSZip();
    SetupGenerator.generateSetup(settings, zip);
    EntitiesGenerator.generateEntities(entities, settings, zip);
    zip.generateAsync({ type: "blob" })
      .then(function (content: any) {
        saveAs(content, settings.project_name + ".zip");
      });
  }
}