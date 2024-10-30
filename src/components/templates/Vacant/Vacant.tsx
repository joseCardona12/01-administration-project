import { Header, Footer } from "@/components/layouts";
import { Section } from "@/components/organisms";
import "./vacantStyles.scss";
import { Content } from "@/models";

interface IVacantProps{
    vacants: Content[]
}
export default function Vacant({vacants}:IVacantProps):React.ReactNode{
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
        page={1}
        totalPages={1}  
        />
        </>
    )
}