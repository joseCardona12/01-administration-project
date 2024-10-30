import { Button } from "@/components/atoms";
import { ArrowBackIcon, ArrowRightIcon } from "@/assets/icons";

interface IPaginationProps{
    page:number,
    totalPages:number
}
export default function Pagination({page,totalPages}:IPaginationProps):React.ReactNode{
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