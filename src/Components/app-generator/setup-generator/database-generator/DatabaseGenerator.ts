import JSZip from "jszip";
import { Settings } from "../../../../types";
import dbTemplate from "./template";

class DatabaseGenerator {

    static generateDatabase(settings: Settings, directory: JSZip){
        var database = directory?.folder("database");
        database?.file("index.js", dbTemplate());
    }
}

export default DatabaseGenerator;