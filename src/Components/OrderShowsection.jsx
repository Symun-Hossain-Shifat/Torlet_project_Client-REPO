import Link from "next/link";
import { ReceiptText } from "lucide-react";
import { getTranslations } from "next-intl/server";
import AdminOrderTable from "./AdminOrdertable";
import { GetUserInserver } from "@/lib/Action/GetData/GetUser";
import UserOrderTable from "./UserOrdertable";

export default async function OrderShowsection({ Data }) {
    const user = await GetUserInserver();
    const t = await getTranslations("AdminTransactions");

    return (
        <>
            {Data?.length === 0 ? (
                <div className="flex min-h-[55vh] items-center justify-center">
                    <div className="max-w-md text-center">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-50">
                            <ReceiptText className="h-12 w-12 text-violet-500" />
                        </div>

                        <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                            {t("emptyTitle")}
                        </h2>

                        <p className="mt-3 leading-relaxed text-gray-500">
                            {t("emptyDesc")}
                        </p>

                        <Link
                            href="/dashboard/product-management"
                            className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                        >
                            {t("viewProducts")}
                        </Link>
                    </div>
                </div>
            ) : (
                <div >
                    {user?.role === 'Admin' ? <AdminOrderTable Data={Data} /> : <UserOrderTable Data={Data} />}
                </div>
            )}
        </>
    );
}