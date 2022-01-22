import JSZip from "jszip";
import { Entity } from "../../../../../../types";
import modelTemplate from "./template";

class ModelsGenerator {

    static generateModel(entity: Entity, directory: JSZip){
        directory?.file(`${entity.entity_name.toLocaleLowerCase()}.model.js`, modelTemplate(entity));
    }
}

export default ModelsGenerator;