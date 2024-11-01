"use client";
import "./buttonStyles.scss";

interface IButtonProps{
    icon?: React.ReactNode,
    text?:string,
    className?:string,
    onClick?: () => void,
    disabled?:boolean
}


export default function Button({icon,text,className, onClick,disabled}: IButtonProps):React.ReactNode{
    return(
        <button className={className}
        disabled={disabled}
        onClick={onClick}>
            {icon}
            {text}
        </button>
    )
}