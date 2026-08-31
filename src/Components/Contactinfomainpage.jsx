import getContactInfo from "@/lib/Action/GetData/GetContactinfo";
import { MessageSquare } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import ContactInfoShowingPage from "./Contactinfoshowingpage";



export default async function ContactInfoMainPage() {
    const t = await getTranslations("AdminMessages");
    const Data = await getContactInfo()

    return (
        <>
            {
                Data.length === 0 ? (

                    < div className="flex min-h-[55vh] items-center justify-center">
                        <div className="max-w-md text-center">
                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20">
                                <MessageSquare className="h-12 w-12 text-orange-500" />
                            </div>

                            <h2 className="mt-6 text-2xl font-semibold text-white">
                                {t("emptyTitle")}
                            </h2>

                            <p className="mt-3 leading-relaxed text-gray-400">
                                {t("emptyDesc")}
                            </p>

                            <Link
                                href="/ProfileDashboard/Admin"
                                className="mt-8 inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 font-medium text-black transition-colors duration-200 hover:bg-orange-600"
                            >
                                {t("backToDashboard")}
                            </Link>
                        </div>
                    </div >
                ) : (
                    <>
                        {
                            Data.map((complaint) => (
                                <ContactInfoShowingPage complaint={complaint} key={complaint._id} />
                            ))
                        }
                    </>
                )
            }


        </>
    )
}