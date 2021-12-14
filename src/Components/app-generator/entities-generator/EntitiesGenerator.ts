import JSZip from "jszip";
import { Entity } from "../../../types/Entity";
import { Settings } from "../../../types/Settings";
import { ControllersGenerator } from "./mongodb/mongoose/controllers-generator";
import { ModelsGenerator } from "./mongodb/mongoose/models-generator";

class EntitiesGenerator {

    static generateEntities(entities: Entity[], settings: Settings, directory: JSZip){
        ModelsGenerator.generateModel(entities, directory);
        ControllersGenerator.generateControllers(entities, directory);
    }
}

export default EntitiesGenerator;