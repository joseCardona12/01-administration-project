"use client";
import { Button } from "@/components/atoms";
import "../../../app/globals.scss";
import "./navigationStyles.scss";
import { SuitcaseIcon, BuildingIcon } from "@/assets/icons";


export default function Navigation():React.ReactNode{
    return(
        <nav className="navigation">
            <Button
            text="Vacancies"
            className="buttonVacant"
            icon={<SuitcaseIcon />}
            onClick={()=>{console.log("creatte")}}  
            />
            <Button
            text="Vacancies"
            className="buttonCompany"
            icon={<BuildingIcon />}
            onClick={()=>{console.log("creaete")}} 
            />
        </nav>
    )
}