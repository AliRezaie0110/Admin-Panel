"use client";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import Pagination from "./Pagination";

export default function ProductList() {
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, isLoading, isError, isFetching } = useProducts(page, limit);

  if (isLoading) return <p className="text-sm text-muted-foreground">در حال بارگذاری محصولات...</p>;
  if (isError) return <p className="text-sm text-destructive">خطا در بارگذاری محصولات!</p>;
  console.log(data);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.products?.map((product) => (
          <Card key={product.id} className="h-[375px] w-[375px] flex flex-col justify-between rounded-[8px] overflow-hidden">
            <Image
              src={product.images[0]}
              width={200}
              height={200}
              alt="product"
              className="object-cover w-full h-[180px]"
            />

            <CardHeader className="flex-1 m-0 py-0 space-y-0">
              <CardTitle className="text-lg font-semibold">
                {product.title.split(" ").slice(0, 3).join(" ")}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{product.category}</p>
            </CardHeader>


            <CardContent className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-right">{product.price.toLocaleString()} تومان</p>
              <div className="flex items-center gap-1 mt-auto">
                <Button variant="outline" size="sm" className="flex items-center rounded-[4px] hover:text-[#0EA5E9] cursor-pointer gap-1">
                  <GoPencil className="text-base" />
                  ویرایش
                </Button>
                <Button variant="destructive" size="sm" className="flex items-center rounded-[4px] hover:bg-white hover:text-red-600 cursor-pointer gap-1">
                  <IoTrashOutline className="text-base" />
                  حذف
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pagination
        page={page}
        limit={limit}
        total={data.total}
        onPageChange={(newPage) => setPage(newPage)}
      />

      {isFetching && <p className="text-xs text-muted-foreground mt-2">در حال واکشی...</p>}
    </>
  );
}
