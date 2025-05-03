import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pagination({ page, limit, total, onPageChange }) {
    const totalPages = Math.ceil(total / limit);

    const pageNumbers = [];
    const visiblePages = 5;
    const startPage = Math.max(1, page - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let i = endPage; i >= startPage; i--) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center items-center gap-1 mt-6 ">
            <Button
                variant="outline"
                size="icon"
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
            >
                <ChevronRight className="w-4 h-4 cursor-pointer" />
            </Button>

            {pageNumbers.map((p) => (
                <Button
                    key={p}
                    variant={p === page ? "default" : "outline"}
                    size="icon"
                    onClick={() => onPageChange(p)}
                    className={p === page ? "bg-[#0EA5E9] text-white " : " cursor-pointer"}

                >
                    {p}
                </Button>
            ))}

            <Button
                variant="outline"
                size="icon"
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>
        </div>
    );
}
