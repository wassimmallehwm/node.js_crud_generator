import { Settings } from "../../../../types/Settings";
import packTemplate from "./template";

class PackageGenerator {

    static generatePackage(settings: Settings){
        return packTemplate(settings);
    }
}

export default PackageGenerator;