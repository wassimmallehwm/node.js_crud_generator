import JSZip from "jszip";
import { Entity } from "../../../../types/Entity";
import { Settings } from "../../../../types/Settings";
import middlewareTemplate from "./template";

class MiddlewareGenerator {

    static generateMiddleware(settings: Settings, entities: Entity[], directory: JSZip){
        var middleware = directory?.folder("middleware");
        middleware?.file("index.js", middlewareTemplate(entities));
    }
}

export default MiddlewareGenerator;