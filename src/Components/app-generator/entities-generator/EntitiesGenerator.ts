import JSZip from "jszip";
import { Entity, Settings } from "../../../types";

class EntitiesGenerator {

    static async generateEntities(entities: Entity[], settings: Settings, directory: JSZip){
        const db = settings.database.toLocaleLowerCase();
        const orm = settings.database_orm.toLocaleLowerCase();
        const { ControllersGenerator } = await import(`./${db}/${orm}/controllers-generator`);
        const { ModelsGenerator } = await import(`./${db}/${orm}/models-generator`);
        const { RoutesGenerator } = await import(`./${db}/${orm}/routes-generator`);
        const { EntityGenerator } = await import(`./${db}/${orm}`);

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