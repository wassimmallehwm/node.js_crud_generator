import JSZip from "jszip";
import { Entity } from "../../../types/Entity";
import { Settings } from "../../../types/Settings";
import { ModelsGenerator } from "./mongodb/mongoose/models-generator";

class EntitiesGenerator {

    static generateEntities(entities: Entity[], settings: Settings, directory: JSZip){
        ModelsGenerator.generateModel(entities, directory);
    }
}

export default EntitiesGenerator;