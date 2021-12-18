import JSZip from "jszip";
import { Entity } from "../../../../../../types";
import routeTemplate from "./template";

class RoutesGenerator {

    static generateRoute(entities: Entity[], directory: JSZip){
        var routes = directory?.folder("routes");
        entities.forEach(entity => {
            routes?.file(`${entity.entity_name.toLocaleLowerCase()}.routes.js`, routeTemplate(entity));
        })
    }
}

export default RoutesGenerator;