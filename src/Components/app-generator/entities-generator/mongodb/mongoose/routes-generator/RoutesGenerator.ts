import JSZip from "jszip";
import { Entity } from "../../../../../../types";
import routeTemplate from "./template";

class RoutesGenerator {

    static generateRoute(entity: Entity, directory: JSZip){
        directory?.file(`${entity.entity_name.toLocaleLowerCase()}.routes.js`, routeTemplate(entity));
    }
}

export default RoutesGenerator;