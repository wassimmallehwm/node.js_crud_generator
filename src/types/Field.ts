export class Field {
    field_name: string;
    field_type: string;
    field_default: string;
    field_required: boolean;
    field_unique: boolean;
    field_ref?: string;

    constructor(json?: {
        field_name: string,
        field_type: string,
        field_default: string,
        field_required: boolean,
        field_unique: boolean
        field_ref?: string
    }) {
        this.field_name = json?.field_name!;
        this.field_type = json?.field_type!;
        this.field_default = json?.field_default!;
        this.field_required = json?.field_required!;
        this.field_unique = json?.field_unique!;
        this.field_ref = json?.field_ref!;
    }
}
