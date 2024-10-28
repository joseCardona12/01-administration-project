import { IVacant } from "@/models";

const baseUrl:string = "http://vacantsbackendgates-production.up.railway.app/api/v1/";

export default class HttpClientUtil{
    private baseUrl:string;
    constructor(urlClient?:string){
        this.baseUrl = urlClient || baseUrl;
    }

    async get<T>(url:string, page:number, size:number):Promise<T>{
        const headers:{[key:string]:string} = await this.getHeaders();
        const response = await fetch(`${this.baseUrl}${url}?page=${page}&size=${size}`, {
            headers,
            cache: "no-store"
        });
        return await this.manageResponse(response);
        
    };
    
    async post<T>(url:string, vacant: Partial<IVacant>):Promise<T>{
        const headers: {[key:string]:string} = await this.getHeaders();
        const response = await fetch(`${this.baseUrl}${url}`, {
            method: "POST",
            headers,
            body: JSON.stringify(vacant),
            cache: "no-store"
        });
        return await this.manageResponse(response);
    }

    async getHeaders():Promise<{[key:string]:string}>{
        return {
            "Content-Type": "application/json",
        }
    }

    private async manageResponse(response:Response){
        if(!response.ok){
            const dataError = await response.json();
            throw new Error(`HTTP Error ${response.status}: ${dataError.message}`);
        }
        return response.json();
    }
    
}