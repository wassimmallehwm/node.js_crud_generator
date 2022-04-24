import JSZip from "jszip";
import { Entity, Settings } from "../../../types";
import { EntityIndexGenerator } from "./entity-index-generator";
import { RoutesGenerator } from "./routes-generator";

class EntitiesGenerator {

    static async generateEntities(entities: Entity[], settings: Settings, directory: JSZip){
        const db = settings.database.toLocaleLowerCase();
        const orm = settings.database_orm.toLocaleLowerCase();
        const { EntityGenerator } = await import(`./databases/${db}/${orm}`);

        const modules = directory?.folder("modules");
        entities.forEach(entity => {
            const entityFolder = modules?.folder(entity.entity_name.toLocaleLowerCase());
            EntityGenerator.generateEntity(entity, entityFolder);
            RoutesGenerator.generateRoute(entity, entityFolder!);
            EntityIndexGenerator.generateEntityIndex(entity, entityFolder!)
        })
    }
}

export default EntitiesGenerator;