import JSZip from "jszip";
import { Entity, Settings } from "../../../types";
import { DatabaseGenerator } from "./database-generator";
import { EnvGenerator } from "./env-generator";
import { IndexGenerator } from "./index-generator";
import { MiddlewareGenerator } from "./middleware-generator";
import { PackageGenerator } from "./package-generator";

class SetupGenerator {

    static generateSetup(settings: Settings, entities: Entity[], directory: JSZip){
        directory?.folder("public");
        directory.file("package.json", PackageGenerator.generatePackage(settings));
        directory.file(".env", EnvGenerator.generateEnv(settings));
        directory.file("index.js", IndexGenerator.generateIndex(settings));
        
        DatabaseGenerator.generateDatabase(settings, directory);
        MiddlewareGenerator.generateMiddleware(settings, entities, directory);
        
        directory.file(".gitignore", `/node_modules
        .env`);
        console.log("Setup generator : ", settings);
    }
}

export default SetupGenerator;