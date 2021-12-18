import { Entity, Settings } from "../../types";
import { EntitiesGenerator } from "./entities-generator";
import { SetupGenerator } from "./setup-generator";
import JSZip from "jszip";
const { saveAs } = require('save-as');

export class AppGenerator {

  static generateApp(entities: Entity[], settings: Settings) {
    var zip = new JSZip();
    SetupGenerator.generateSetup(settings, entities, zip);
    EntitiesGenerator.generateEntities(entities, settings, zip)
      .then(() => {
        zip.generateAsync({ type: "blob" })
          .then(function (content: any) {
            saveAs(content, settings.project_name.replace(' ', '-') + ".zip");
          });
      })
  }
}