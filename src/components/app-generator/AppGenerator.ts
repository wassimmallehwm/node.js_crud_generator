import { Entity, Settings } from "../../types";
import { EntitiesGenerator } from "./entities-generator";
import { SetupGenerator } from "./setup-generator";
import JSZip from "jszip";
import { Toast } from "../../utils/toast";
const { saveAs } = require('save-as');

export class AppGenerator {

  static async generateApp(entities: Entity[], settings: Settings, callback: any) {
    try {
      var zip = new JSZip();
      await SetupGenerator.generateSetup(settings, entities, zip);
      if (entities.length > 0) {
        await EntitiesGenerator.generateEntities(entities, settings, zip)
      }
      zip.generateAsync({ type: "blob" })
        .then(function (content: any) {
          saveAs(content, settings.project_name.replace(' ', '-') + ".zip");
          Toast('SUCCESS', 'Project generated successfully')
          callback();
        }).catch((error: any) => {
          console.error("ERROR : ", error)
          Toast('ERROR', 'Project generation failed')
        });
    } catch (err) {
      callback()
      console.error("err : ", err)
      Toast('ERROR', 'Project generation failed')
    }


  }
}