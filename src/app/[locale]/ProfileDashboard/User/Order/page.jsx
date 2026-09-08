import OrderShowsection from "@/Components/OrderShowsection";
import GetOrder from "@/lib/Action/GetData/GetOrder";
import { GetUserInserver } from "@/lib/Action/GetData/GetUser";
import { getTranslations } from "next-intl/server";

export default async function TransactionPage() {
    const user = await GetUserInserver();
    const t = await getTranslations("AdminTransactions");

    const Data = user?.role === 'Admin' ? await GetOrder() : await GetOrder(user?.email);
    return (
        <section className="container mx-auto px-4 py-10">
            {/* Page Heading */}
            <div className="mb-10 pb-4">
                <h1 className="text-3xl font-bold text-orange-500">
                    {t("title")}
                </h1>
                <p className="mt-2 text-gray-500">
                    {t("subtitle")}
                </p>
            </div>


            <OrderShowsection Data={Data}></OrderShowsection>
        </section>
    );
}