import JSZip from "jszip";
import { Entity } from "../../../types/Entity";
import { Settings } from "../../../types/Settings";

class EntitiesGenerator {

    static generateEntities(entities: Entity[], settings: Settings, directory: JSZip){
        console.log("Entity generator : ", entities);
        console.log("Entity generator : ", settings);
    }
}

export default EntitiesGenerator;