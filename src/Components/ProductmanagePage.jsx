import { GetProduct } from "@/lib/Action/GetData/GetProduct";
import Link from "next/link";
import { PackageSearch } from "lucide-react";
import { ProductsTable } from "./ProductmanageTable";



export default async function ProductManagePage() {
    const Products = await GetProduct()
    console.log(Products)
    return (
        <div>
            {
                Products.length === 0 ? (
                    <div className="flex min-h-[55vh] items-center justify-center">
                        <div className="max-w-md text-center">
                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-50">
                                <PackageSearch className="h-12 w-12 text-amber-500" />
                            </div>

                            <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                                {t("emptyTitle")}
                            </h2>

                            <p className="mt-3 leading-relaxed text-gray-500">
                                {t("emptyDesc")}
                            </p>

                            <Link
                                href="/ProfileDashboard/Admin/Addproduct"
                                className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                            >
                                {t("addNew")}
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <ProductsTable></ProductsTable>
                    </>
                )
            }
        </div>
    )
}