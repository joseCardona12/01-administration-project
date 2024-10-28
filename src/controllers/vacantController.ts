import { Content } from "@/models";
import {VacantService} from "@/services";

class VacantController{
    private vacantService:VacantService = new VacantService();

    async getAllVacants(page:number, size:number):Promise<{content:Content[], totalPages:number, totalElements:number} | {message:string}>{
        const data = await this.vacantService.findAll(page, size);
        if("message" in data){
            return data;
        }
        return data;
    }

    async createVacant(vacant:Partial<Content>):Promise<Content | {message:string}>{
        const data = await this.vacantService.create(vacant);
        if("message" in data){
            return data;
        }
        return data;
    }
}

export default new VacantController();