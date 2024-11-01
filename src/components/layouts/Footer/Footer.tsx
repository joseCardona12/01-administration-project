import { Pagination } from "@/components/molecules";
import "./footerStyles.scss";

export default function Footer({page,totalPages}: {page:number,totalPages:number}):React.ReactNode{
    console.log("page", page, "totalPages", totalPages);
    return(
        <footer className="footer">
            <Pagination
            page={page}
            totalPages={totalPages}
            />
        </footer>
    )
}