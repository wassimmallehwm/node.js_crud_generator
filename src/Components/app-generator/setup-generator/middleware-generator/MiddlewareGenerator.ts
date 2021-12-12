import JSZip from "jszip";
import { Settings } from "../../../../types/Settings";
import middlewareTemplate from "./template";

class MiddlewareGenerator {

    static generateMiddleware(settings: Settings, directory: JSZip){
        var middleware = directory?.folder("middleware");
        middleware?.file("index.js", middlewareTemplate());
    }
}

export default MiddlewareGenerator;