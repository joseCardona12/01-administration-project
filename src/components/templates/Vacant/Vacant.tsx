import { Header, Footer } from "@/components/layouts";
import { Section } from "@/components/organisms";
import "./vacantStyles.scss";
import { Content } from "@/models";

interface IVacantProps{
    vacants: Content[],
    pageNumber:number,
    totalPages:number
}
export default function Vacant({vacants, pageNumber, totalPages}:IVacantProps):React.ReactNode{
    return(
        <>
        <Header
        title="Vacant"
        />
        <main className="main">
            <Section
            titleSection="Vacant"
            textButton="Add Vacant"
            data={vacants}
            />
        </main>
        <Footer
        page={pageNumber}
        totalPages={totalPages}
        />
        </>
    )
}