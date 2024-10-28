import { VacantController } from "@/controllers"
import { Content } from "@/models"


export default async function Dashboard(){
    const vacancies: {content: Content[], totalPages: number, totalElements: number } | {message:string} = await VacantController.getAllVacants(0, 10);
    if("message" in vacancies){
        console.log("message", vacancies.message);
        return;
    }
    console.log("vacancies", vacancies);

    return(
        <div>{JSON.stringify(vacancies)}</div>
    )
}