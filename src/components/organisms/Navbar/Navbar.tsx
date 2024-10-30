
import { Navigation } from "@/components/molecules";
import Search from "@/components/molecules/Search/Search";
import "./navbarStyles.scss";

export default function Navbar():React.ReactNode{
    return(
        <div className="navbar">
            <Navigation />
            <Search />
        </div>
    )
}