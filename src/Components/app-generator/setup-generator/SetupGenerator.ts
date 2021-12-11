import JSZip from "jszip";
import { Settings } from "../../../types/Settings";
import { PackageGenerator } from "./package-generator";

class SetupGenerator {

    static generateSetup(settings: Settings, directory: JSZip){
        directory.file("package.json", PackageGenerator.generatePackage(settings));
        console.log("Setup generator : ", settings);
    }
}

export default SetupGenerator;