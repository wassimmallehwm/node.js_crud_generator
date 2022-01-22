import JSZip from "jszip";
import { Entity, Settings } from "../../../../types";
//import middlewareTemplate from "./template";

class UtilsGenerator {

    static async generateUtils(settings: Settings, entities: Entity[], directory: JSZip){
        const { ErrorsHandlerGenerator } = await import(`./errors-handler-generator/${settings.database}/${settings.database_orm}`);
        const utils = directory?.folder("utils");
        utils?.file("errorHandler.js", ErrorsHandlerGenerator.generateErrorsHandler());
    }
}

export default UtilsGenerator;