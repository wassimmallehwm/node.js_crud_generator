
export class DbConfig {
    remote?: boolean;
    auth?: boolean;
    host?: string;
    port?: string;
    user?: string;
    pwd?: string;

    constructor(json?: {
        remote: boolean,
        auth: boolean,
        host: string,
        port: string,
        user: string,
        pwd: string,
    }) {
        this.remote = json?.remote!;
        this.auth = json?.auth!;
        this.host = json?.host!;
        this.port = json?.port!;
        this.user = json?.user!;
        this.pwd = json?.pwd!;
    }
}
