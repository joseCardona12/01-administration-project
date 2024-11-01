import { Pagination } from "@/components/molecules";
import "./footerStyles.scss";

export default function Footer():React.ReactNode{
    return(
        <footer className="footer">
            <Pagination />
        </footer>
    )
}