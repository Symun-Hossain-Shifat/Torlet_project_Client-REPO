


import { useTranslations } from "next-intl";
import ProductManagePage from "@/Components/ProductmanagePage";


export default function ProductManagement() {
    const t = useTranslations("AdminProducts");

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
            <ProductManagePage></ProductManagePage>
            {/* Empty State */}

        </section>
    );
}