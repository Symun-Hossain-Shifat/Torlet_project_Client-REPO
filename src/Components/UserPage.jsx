import Link from "next/link";
import { Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { GetAllUserInformation } from "@/lib/Action/GetData/GetUser";
import UsermanageTable from "./UsermanageTable";

export default async function UsermanagePage() {
    const t = useTranslations("AdminUsers");

    const User = await GetAllUserInformation();



    return (
        <div>
            {User.length === 0 ? (
                <>
                    {/* Empty State */}
                    <div className="flex min-h-[55vh] items-center justify-center">
                        <div className="max-w-md text-center">
                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
                                <Users className="h-12 w-12 text-blue-500" />
                            </div>

                            <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                                {t("emptyTitle")}
                            </h2>

                            <p className="mt-3 leading-relaxed text-gray-500">
                                {t("emptyDesc")}
                            </p>

                            <Link
                                href="/ProfileDashboard/Admin"
                                className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                            >
                                {t("dashboard")}
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    {/* Users থাকলে এখানে দেখাবে */}
                    <UsermanageTable User={User} />
                </div>
            )}
        </div>
    );
}