import { Field } from "./Field";

export class Entity {
    entity_name: string;
    entity_fields: Field[];
    entity_timestamp: boolean;
    entity_paginated: boolean;

    constructor(json?: {
        entity_name: string,
        entity_fields: Field[],
        entity_timestamp: boolean,
        entity_paginated: boolean,
    }) {
        this.entity_name = json?.entity_name!;
        this.entity_fields = json?.entity_fields!;
        this.entity_timestamp = json?.entity_timestamp!;
        this.entity_paginated = json?.entity_paginated!;
    }
}
