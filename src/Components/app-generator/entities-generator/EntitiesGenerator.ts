import JSZip from "jszip";
import { Entity, Settings } from "../../../types";

class EntitiesGenerator {

    static async generateEntities(entities: Entity[], settings: Settings, directory: JSZip){
        const { ControllersGenerator } = await import(`./${settings.database}/${settings.database_orm}/controllers-generator`);
        const { ModelsGenerator } = await import(`./${settings.database}/${settings.database_orm}/models-generator`);
        const { RoutesGenerator } = await import(`./${settings.database}/${settings.database_orm}/routes-generator`);
        const { EntityGenerator } = await import(`./${settings.database}/${settings.database_orm}`);

        const modules = directory?.folder("modules");
        entities.forEach(entity => {
            const entityFolder = modules?.folder(entity.entity_name.toLocaleLowerCase());
            ModelsGenerator.generateModel(entity, entityFolder);
            ControllersGenerator.generateControllers(entity, entityFolder);
            RoutesGenerator.generateRoute(entity, entityFolder);
            EntityGenerator.generateIndex(entity, entityFolder);
        })
    }
}

export default EntitiesGenerator;