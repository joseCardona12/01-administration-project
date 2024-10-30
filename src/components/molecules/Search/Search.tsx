"use client";
import { SearchIcon } from "@/assets/icons"
import { Input } from "@/components/atoms"

export default function Search():React.ReactNode{
    return(
        <div className="search">
            <SearchIcon />
            <Input
            type="text"
            name="search"
            value=""
            onChange={()=>{}}
            placeholder="search"
            />
        </div>
    )
}