"use client";
import { Button } from "@/components/atoms";
import "./navigationStyles.scss";


export default function Navigation():React.ReactNode{
    return(
        <nav className="navigation">
            <Button
            text="Vacancies"
            backgroundColor="$background-color-main"
            color="white"
            borderRadius="8px"
            icon={<i className="fa-solid fa-plus"></i>}
            onClick={()=>{console.log("creatte")}}  
            />
            <Button
            text="Vacancies"
            backgroundColor="gray"
            color="white"
            borderRadius="8px"
            icon={<i className="fa-solid fa-plus"></i>}
            onClick={()=>{console.log("creaete")}} 
            />
        </nav>
    )
}