import { EditIcon, DeleteIcon } from "@/assets/icons";
import "./cardStyles.scss";

interface ICardProps{
    title:string,
    id?:number,
    children:React.ReactNode,
}

export default function Card({title,id,children}: ICardProps):React.ReactNode{
    const handleDeleteVacant = (id:number | undefined) =>{
        if(!id) return;
        const answer = confirm("Are you sure you want to delete this vacant?");
        console.log(answer);
    }
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
                    <DeleteIcon onClick={()=>handleDeleteVacant(id)}
                    />
                </div>
            </div>
        </div>
    )
}