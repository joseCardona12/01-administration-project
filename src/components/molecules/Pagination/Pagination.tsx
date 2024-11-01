"use client";
import { Button } from "@/components/atoms";
import { ArrowBackIcon, ArrowRightIcon } from "@/assets/icons";
import { useRouter, useSearchParams } from "next/navigation";
import "./paginationStyles.scss";

interface IPaginationProps{
    page:number,
    totalPages:number
}
export default function Pagination({page,totalPages}:IPaginationProps):React.ReactNode{
    const router = useRouter();
    const searchParams = useSearchParams();
    console.log(page,totalPages);

    const onPageChange = (newPage:number):void =>{
        const params = new URLSearchParams(searchParams.toString());
        params.set("page",newPage.toString());
        router.push(`?${params.toString()}`);
    }
    const currentPage = page +1;
    return(
        <div className="pagination">
            <Button
            onClick={() => onPageChange(currentPage - 1)}
            icon={<ArrowBackIcon />}
            disabled={currentPage === 1}
            className="pagination-button"
             />
             <span>Page</span>
             <span>{page}</span>
             <span>Of</span>
             <span>{totalPages}</span>
            <Button
            onClick={() => onPageChange(currentPage + 1)}
            icon={<ArrowRightIcon />}
            disabled={currentPage === totalPages}
            className="pagination-button"
            />
        </div>
    )
}