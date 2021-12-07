import Axios, { Method } from "axios";

export class APIService {

    configValue: string = process.env.REACT_APP_NPM_URL!;

    constructor() {
    }

    async httpClient(apiUrl: string, method: Method, headers?: any){
        const options = {
            url: `${apiUrl}`,
            method: method,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
              ...headers
            },
          };

        return Axios(options);
    }

    async findNpmPacks(search: string){
        const url: string = `${this.configValue}${search}&size=5`; 
        return this.httpClient(url, 'GET');
    }
}