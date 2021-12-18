import { Settings } from "../../../../types";
import indexTemplate from "./template";

class IndexGenerator {

    static generateIndex(settings: Settings){
        return indexTemplate(settings);
    }
}

export default IndexGenerator;