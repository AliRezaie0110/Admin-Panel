"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
    return (
        <div className="flex flex-row items-center justify-between h-[70px] bg-white border-b border-border shadow-sm px-6 ">
            <div className="w-full flex items-center justify-between gap-x-3">
                <div className="flex items-center justify-center cursor-pointer w-[32px] h-[32px] bg-[#0EA5E9] rounded-[4px]">
                    <Image src="/icons/Text.png" alt="icon" width={12} height={22} />
                </div>
                <Button className="bg-[#0EA5E9] cursor-pointer hover:bg-[#0284C7] rounded-[4px]">
                    + افزودن محصول
                </Button>
            </div>
        </div>
    );
}
