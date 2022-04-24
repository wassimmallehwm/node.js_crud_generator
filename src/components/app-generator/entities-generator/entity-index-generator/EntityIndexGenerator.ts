import JSZip from "jszip";
import { Entity } from "../../../../types";

class EntityIndexGenerator {

    static generateEntityIndex(entity: Entity, directory: JSZip) {
        const entityLow = entity.entity_name.toLocaleLowerCase();
        const entityIndex = `const ${entityLow}Routes = require('./${entityLow}.routes')
module.exports = ${entityLow}Routes;`
        directory?.file(`index.js`, entityIndex);
    }

}

export default EntityIndexGenerator;