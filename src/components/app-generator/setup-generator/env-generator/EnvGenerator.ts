import { Settings } from "../../../../types";
import envTemplate from "./template";

class EnvGenerator {

    static generateEnv(settings: Settings){
        return envTemplate(settings);
    }
}

export default EnvGenerator;