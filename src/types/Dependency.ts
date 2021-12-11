export class Dependency {
    name: string;
    version: string;

    constructor(json?: {
        name: string,
        version: string
    }) {
        this.name = json?.name!;
        this.version = json?.version!;
    }
}
