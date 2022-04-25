import JSZip from "jszip";
import { Entity } from "../../../../../../../types";
import controllerTemplate from "./template";

class ControllersGenerator {

    static generateControllers(entity: Entity, directory: JSZip){
        directory?.file(`${entity.entity_name.toLocaleLowerCase()}.controller.js`, controllerTemplate(entity));
    }
}

export default ControllersGenerator;