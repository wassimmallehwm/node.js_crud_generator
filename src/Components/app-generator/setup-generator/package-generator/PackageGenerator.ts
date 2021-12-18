import { Settings } from "../../../../types";
import packTemplate from "./template";

class PackageGenerator {

    static generatePackage(settings: Settings){
        return packTemplate(settings);
    }
}

export default PackageGenerator;