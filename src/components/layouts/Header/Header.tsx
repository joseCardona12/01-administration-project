import { Navbar } from "@/components/organisms";
import "./headerStyles.scss";

interface IHeaderProps{
    title:string,
}
export default function Header({title}:IHeaderProps):React.ReactNode{
    return(
        <header className="header center-flex-column">
            <h2>{title}</h2>
            <div className="header-nav">
                <Navbar />
            </div>
        </header>
    )
}