import { Pagination } from "@/components/molecules";

interface IFooterProps{
    page:number,
    totalPages:number
}
export default function Footer({page,totalPages}: IFooterProps):React.ReactNode{
    return(
        <footer>
            <Pagination
            page={page}
            totalPages={totalPages}
            />
        </footer>
    )
}