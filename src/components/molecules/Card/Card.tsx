import { EditIcon, DeleteIcon } from "@/assets/icons"

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
                <EditIcon />
                <DeleteIcon />
            </div>
        </div>
    )
}