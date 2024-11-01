"use client";
import { SearchIcon } from "@/assets/icons"
import { Input } from "@/components/atoms"
import "./searchStyles.scss";
import { useState } from "react";

export default function Search():React.ReactNode{

    const [searchValue, setSearchValue] = useState<string>("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {value} = e.target;
        setSearchValue(value);  
    }
    const handleClick = () =>{
        console.log(searchValue); // Get the value for search card
    }
    return(
        <div className="search">
            <SearchIcon
            className="search-icon"
            onClick={handleClick}
            />
            <Input
            type="text"
            name="search"
            value={searchValue}
            onChange={(e)=>handleChange(e)}
            placeholder="search..."
            />
        </div>
    )
}