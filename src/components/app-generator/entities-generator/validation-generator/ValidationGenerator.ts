import JSZip from "jszip";
import { Entity } from "../../../../types";
import {validationTemplate} from "./template";

class ValidationGenerator {

    static generateValidation(entity: Entity, directory: JSZip){
        directory?.file(`${entity.entity_name.toLocaleLowerCase()}.validation.js`, validationTemplate(entity.entity_fields));
    }
}

export default ValidationGenerator;