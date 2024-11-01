"use client";
import { Button } from "@/components/atoms";
import { ArrowBackIcon, ArrowRightIcon } from "@/assets/icons";
import { useRouter, useSearchParams } from "next/navigation";
import "./paginationStyles.scss";
import { usePaginationState } from "@/global-state/pagination";

export default function Pagination():React.ReactNode{
    const router = useRouter();
    const searchParams = useSearchParams();
    const {contentPage} = usePaginationState((state)=>state);

    const onPageChange = (newPage:number):void =>{
        const params = new URLSearchParams(searchParams.toString());
        params.set("page",newPage.toString());
        router.push(`?${params.toString()}`);
    }
    const currentPage = contentPage.page +1;
    return(
        <div className="pagination">
            <Button
            onClick={() => onPageChange(currentPage - 1)}
            icon={<ArrowBackIcon />}
            disabled={currentPage === 1}
            className="pagination-button"
             />
             <span>Page</span>
             <span>{contentPage.page}</span>
             <span>Of</span>
             <span>{contentPage.totalPage}</span>
            <Button
            onClick={() => onPageChange(currentPage + 1)}
            icon={<ArrowRightIcon />}
            disabled={currentPage === contentPage.totalPage}
            className="pagination-button"
            />
        </div>
    )
}