import JSZip from "jszip";
import { Entity } from "../../../../../../types";
import modelTemplate from "./template";

class ModelsGenerator {

    static generateModel(entities: Entity[], directory: JSZip){
        var models = directory?.folder("models");
        entities.forEach(entity => {
            models?.file(`${entity.entity_name.toLocaleLowerCase()}.model.js`, modelTemplate(entity));
        })
    }
}

export default ModelsGenerator;