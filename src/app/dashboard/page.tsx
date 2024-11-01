import { Vacant } from "@/components/templates";
import { VacantController } from "@/controllers"
import { Content } from "@/models";
import "./dashboardStyles.scss";
import { usePaginationState } from "@/global-state/pagination";
import ProviderStore from "../Provider";

interface IDashboardProps {
    searchParams: {
        page: string,
        size: string,
        name: string,
    }
}

export const generateMetadata = async ({ searchParams }: IDashboardProps): Promise<{ title: string, description: string }> => {
    const page = searchParams.page || 1;
    return {
        title: `Clients - Page ${page}`,
        description: "Company management"
    }
}

export default async function Dashboard({ searchParams }: IDashboardProps) {

    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 5;


    const vacancies: { content: Content[], pageable: { pageNumber: number }, totalPages: number } | { message: string } = await VacantController.getAllVacants(page, size);
    if ("message" in vacancies) {
        console.log("message", vacancies.message);
        return;
    }
    console.log("vacancies", vacancies);

    return (
        <ProviderStore pagination={{page:vacancies.pageable.pageNumber, totalPages:vacancies.totalPages}}>

            <div className="content-dashboard">
                <Vacant
                    vacants={vacancies.content}
                />
            </div>
        </ProviderStore>
    )
}