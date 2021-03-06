import { DbConfig } from "./DbConfig";
import { Dependency } from "./Dependency";

export class Settings {
    project_name: string;
    database: string;
    database_orm: string;
    database_config: DbConfig;
    dependencies: Dependency[];
    authentication: boolean;
    auth_type: string;

    constructor(json?: {
        project_name: string;
        database: string;
        database_orm: string;
        database_config: DbConfig;
        dependencies: Dependency[];
        authentication: boolean;
        auth_type: string;
    }) {
        this.project_name = json?.project_name!;
        this.database = json?.database!;
        this.database_orm = json?.database_orm!;
        this.database_config = json?.database_config!;
        this.dependencies = json?.dependencies!;
        this.authentication = json?.authentication!;
        this.auth_type = json?.auth_type!;
    }
}
