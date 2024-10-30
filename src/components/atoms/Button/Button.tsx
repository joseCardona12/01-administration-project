"use client";
import "./buttonStyles.scss";

interface IButtonProps{
    icon?: React.ReactNode,
    text?:string,
    backgroundColor?:string,
    color?:string,
    borderRadius?:string,
    onClick?: () => void
}


export default function Button({icon,text,backgroundColor,color,borderRadius,onClick}: IButtonProps):React.ReactNode{
    return(
        <button className="button" 
        style={{
            backgroundColor, 
            color,
            borderRadius
        }} 
        onClick={onClick}>
            {icon}
            {text}
        </button>
    )
}