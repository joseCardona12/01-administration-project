"use client";
import {usePaginationState} from "@/global-state/pagination";

interface IProviderProps{
    children:React.ReactNode
    pagination: {
        page:number
        totalPages:number
    }
}

export default function ProviderPagination({children, pagination}: IProviderProps){
    const paginationState = usePaginationState((state) => state);
    console.log("-----------",paginationState);
    return(
        <>
            {children}
        </>
    )
}