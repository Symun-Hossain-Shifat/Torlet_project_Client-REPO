

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { GetCartByEmail } from "@/lib/Action/GetData/GetCartByEmail";
import { GetUserInserver } from "@/lib/Action/GetData/GetUser";
import { getTranslations } from "next-intl/server";
import CartShowSection from "@/Components/CartShowSection";

export default async function Cart() {
    const User = await GetUserInserver()
    const email = User?.email
    const t = await getTranslations("CartPage");
    const data = await GetCartByEmail(email);


    return (
        <section className="container mx-auto px-4 py-10">
            {/* Page Heading */}
            <div className="mb-10 pb-4">
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold tracking-tight text-orange-500 sm:text-3xl">
                        {t("title")}
                    </h1>

                    <span className="inline-flex text-[15px]  text-white ">
                        {`Items ${data.length}`}
                    </span>
                </div>

                <p className="mt-2 text-gray-500">
                    {t("subtitle")}
                </p>
            </div>
            {
                data.length > 0 ? (<>
                    <CartShowSection data={data}></CartShowSection>
                </>) : (<div className="flex min-h-[55vh] items-center justify-center">
                    <div className="max-w-md text-center">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                            <ShoppingCart className="h-12 w-12 text-gray-400" />
                        </div>

                        <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                            {t("emptyTitle")}
                        </h2>

                        <p className="mt-3 text-gray-500 leading-relaxed">
                            {t("emptyDesc")}
                        </p>

                        <Link
                            href="/"
                            className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                        >
                            {t("continue")}
                        </Link>
                    </div>
                </div>)
            }


        </section>
    );
}