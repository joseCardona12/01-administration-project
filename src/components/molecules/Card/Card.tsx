import { EditIcon, DeleteIcon } from "@/assets/icons";
import "./cardStyles.scss";

interface ICardProps{
    title:string,
    children:React.ReactNode,
}

export default function Card({title,children}: ICardProps):React.ReactNode{
    return(
        <div className="content-card">
            <div className="card-header">
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer">
                <div className="button-icon edit-icon">
                    <EditIcon  
                    />
                </div>
                <div className="button-icon delete-icon">
                    <DeleteIcon
                    />
                </div>
            </div>
        </div>
    )
}