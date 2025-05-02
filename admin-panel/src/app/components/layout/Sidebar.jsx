"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosSquareOutline } from "react-icons/io";

const menu = [
  { label: 'داشبرد', href: '/admin/dashboard' },
  { label: 'محصولات', href: '/admin/products' },
  { label: 'دسته‌بندی‌ها', href: '/admin/categories' },
  { label: 'سفارشات', href: '/admin/orders' },
  { label: 'مشتریان', href: '/admin/customers' },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-[220px] shadow px-4 py-6 border-l border-border text-white bg-[#1F2937]">
      <div className="w-full border-b border-[#374151] mb-6 pb-2">
        <h2 className="text-xl font-bold">مدیریت فروشگاه</h2>
      </div>

      <nav className="space-y-2 text-white bg-[#1F2937]">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-x-2 text-[16px] rounded px-3 py-2 w-[188px] h-[41px] font-medium leading-none hover:bg-[#0EA5E9] transition ${pathname === item.href
                ? 'bg-[#0EA5E9] text-white'
                : 'text-white bg-[#1F2937] hover:bg-[#374151]'
              }`}
          >
            <IoIosSquareOutline className="text-lg flex-shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>

  );
}
