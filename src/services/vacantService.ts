import { Content, IResponseVacant, IVacant } from "@/models";
import {HttpClientUtil} from "@/utils";

export default class VacantService {
  private httpClientUtil: HttpClientUtil = new HttpClientUtil();

  async findAll(
    page: number,
    size: number
  ): Promise<{ content: Content[], pageable: {pageNumber: number}, totalPages: number }| {message:string}> {
    try{
        const data = await this.httpClientUtil.get<IResponseVacant>(
          "vacants",
          page,
          size
        );
        const { content, pageable: {pageNumber}, totalPages } = data;
        return { content, pageable: {pageNumber}, totalPages };

    }catch(error:unknown){
        return ({message: `Error with the method findAll: ERROR:${error}`})
    }
  };
  
  async create(vacant: Partial<IVacant>): Promise<Content | {message:string}> {
    try{
        const data = await this.httpClientUtil.post<Content>("vacants", vacant);
        return data;
    }catch(error:unknown){
        return ({message: `Error with the method create: ERROR:${error}`})
    }
  }
}
