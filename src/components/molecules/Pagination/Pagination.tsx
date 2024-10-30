"use client";
import { Button } from "@/components/atoms";
import { ArrowBackIcon, ArrowRightIcon } from "@/assets/icons";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface IPaginationProps{
    page:number,
    totalPages:number
}
export default function Pagination({page,totalPages}:IPaginationProps):React.ReactNode{
    const router = useRouter();
    const searchParams = useSearchParams();

    const onPageChange = (newPage:number):void =>{
        const params = new URLSearchParams(searchParams.toString());
        params.set("page",newPage.toString());
        router.push(`?${params.toString()}`);
    }
    const currentPage = page +1;
    return(
        <div className="pagination">
            <Button
            icon={<ArrowBackIcon />}
             />
            Page {page}
            of {totalPages}
            <Button
            icon={<ArrowRightIcon />}
            />
        </div>
    )
}