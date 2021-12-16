import JSZip from "jszip";
import { Entity } from "../../../types/Entity";
import { Settings } from "../../../types/Settings";


class EntitiesGenerator {

    static async generateEntities(entities: Entity[], settings: Settings, directory: JSZip){
        const { ControllersGenerator } = await import(`./${settings.database}/${settings.database_orm}/controllers-generator`);
        const { ModelsGenerator } = await import(`./${settings.database}/${settings.database_orm}/models-generator`);
        const { RoutesGenerator } = await import(`./${settings.database}/${settings.database_orm}/routes-generator`);
        
        ModelsGenerator.generateModel(entities, directory);
        ControllersGenerator.generateControllers(entities, directory);
        RoutesGenerator.generateRoute(entities, directory)
    }
}

export default EntitiesGenerator;