import JSZip from "jszip";
import { Settings } from "../../../../types";

class DatabaseGenerator {

    static async generateDatabase(settings: Settings, directory: JSZip){
        const database = directory?.folder("database");
        const db = settings.database.toLocaleLowerCase();
        const orm = settings.database_orm.toLocaleLowerCase();
        const {dbTemplate} = await import(`./${db}/${orm}`);
        database?.file("index.js", dbTemplate());
    }
}

export default DatabaseGenerator;