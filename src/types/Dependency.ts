export class Dependency {
    dependency_name: string;
    dependency_version: string;

    constructor(json?: {
        dependency_name: string,
        dependency_version: string
    }) {
        this.dependency_name = json?.dependency_name!;
        this.dependency_version = json?.dependency_version!;
    }
}
