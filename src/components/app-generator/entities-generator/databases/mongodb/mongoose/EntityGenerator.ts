import JSZip from "jszip";
import { Entity } from "../../../../../../types";
import { ControllersGenerator } from "./controllers-generator";
import { ModelsGenerator } from "./models-generator";

class EntityGenerator {

    static generateEntity(entity: Entity, directory: JSZip) {
        ModelsGenerator.generateModel(entity, directory);
        ControllersGenerator.generateControllers(entity, directory);
    }

}

export default EntityGenerator;