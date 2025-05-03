import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center my-10">
      <Button className="">
      <Link href="admin/products">Admin Panel</Link>
    </Button>
    </div>
  );
}
