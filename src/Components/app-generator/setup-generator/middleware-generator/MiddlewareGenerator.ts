import JSZip from "jszip";
import { Entity, Settings } from "../../../../types";
import middlewareTemplate from "./template";

class MiddlewareGenerator {

    static generateMiddleware(settings: Settings, entities: Entity[], directory: JSZip){
        const middleware = directory?.folder("middleware");
        middleware?.file("index.js", middlewareTemplate(entities));
    }
}

export default MiddlewareGenerator;