"use client";

import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="bg-white border-b border-border shadow-sm px-6 h-[80px] flex justify-between items-center">

      <div className="relative w-64">
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-muted-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>

        <Input
          placeholder="جستجوی محصول..."
          className="pr-10 text-right"
          dir="rtl"
        />
      </div>


      <span className="text-black text-lg font-bold">مدیریت محصولات</span>
    </header>
  );
}
