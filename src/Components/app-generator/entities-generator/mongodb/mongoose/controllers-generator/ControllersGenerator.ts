import JSZip from "jszip";
import { Entity } from "../../../../../../types";
import controllerTemplate from "./template";

class ControllersGenerator {

    static generateControllers(entities: Entity[], directory: JSZip){
        var controllers = directory?.folder("controllers");
        entities.forEach(entity => {
            controllers?.file(`${entity.entity_name.toLocaleLowerCase()}.controller.js`, controllerTemplate(entity));
        })
    }
}

export default ControllersGenerator;