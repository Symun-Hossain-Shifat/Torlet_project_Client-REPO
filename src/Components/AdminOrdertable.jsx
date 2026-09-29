'use client'
import Image from "next/image";
import { Check, Trash2 } from "lucide-react";
import DeleteOrder from "@/lib/Action/DeleteData/DeleteOrder";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import EditOrder from "@/lib/Action/EditData/EditOrder";
import { useTranslations } from "next-intl";

export default function AdminOrderTable({ Data }) {
    const router = useRouter();
    const t = useTranslations("AdminTables");

    const HandleOrderDelete = async (order) => {
        const id = order._id;
        const status = order.status
        if (status === 'pending') {
            toast.error(t("pendingDeleteError"));
            return
        }

        const result = await DeleteOrder(id)

        if (result.deletedCount === 1) {
            toast.success(t("deleteSuccess"));
            router.refresh()
        } else {
            toast.error(t("deleteFailed"));
        }
    }
    const HandleApprove = async (order) => {
        const id = order._id;
        const status = 'Approved';
        const result = await EditOrder(id, status)
        if (order.status === 'Approved') {
            toast.error(t("alreadyApproved"))
            return
        }

        if (result.modifiedCount === 1) {
            toast.success(t("approveSuccess"));
            router.refresh()
        } else {
            toast.error(t("approveFailed"));
        }


    }
    return (
        <div className="w-full overflow-x-auto rounded-xl border border-gray-800 bg-black p-4">
            <h1 className="mb-4 text-xl font-semibold text-white">
                {t("adminOrderTitle")}
            </h1>

            <table className="w-full min-w-[900px] border-collapse text-left text-sm text-gray-300">
                <thead>
                    <tr className="border-b border-gray-800 text-xs uppercase tracking-wide text-gray-400">
                        <th className="px-4 py-3">{t("product")}</th>
                        <th className="text-center py-3">{t("customer")}</th>
                        <th className="px-4 py-3">{t("contact")}</th>
                        <th className="px-4 py-3">{t("address")}</th>
                        <th className="px-2 py-3">{t("qty")}</th>
                        <th className="px-2 py-3">{t("price")}</th>
                        <th className="px-4 py-3">{t("status")}</th>
                        <th className="px-4 py-3">{t("date")}</th>
                        <th className="px-4 py-3 text-center">{t("actions")}</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((order) => (
                        <tr
                            key={order._id}
                            className="border-b border-gray-900 hover:bg-gray-900/50"
                        >
                            <td className="flex items-center mr-5 gap-3 px-4 py-3">
                                <Image
                                    src={order.image}
                                    alt={order.product}
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 rounded-md object-cover"
                                />
                                <span className="font-medium text-white">
                                    {order.product}
                                </span>
                            </td>

                            <td className="px-4 py-3 text-center">
                                <div className="text-white">{order.name}</div>
                                <div className="text-xs text-gray-500">
                                    {order.email}
                                </div>
                            </td>

                            <td className="px-4 py-3">{order.mobile}</td>

                            <td className="max-w-[180px] truncate px-4 py-3">
                                {order.address}
                            </td>

                            <td className=" text-center py-3">{order.quantity}</td>

                            <td className=" text-center py-3">${order.price}</td>

                            <td className="px-4 py-3">
                                <span className={`${order.status === 'pending' ? 'bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400' : order.status === 'Approved' ? 'bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400' : 'bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400'}`}>
                                    {order.status === 'pending' ? t("pending") : order.status === 'Approved' ? t("approved") : order.status}
                                </span>
                            </td>

                            <td className="px-4 py-3 text-gray-400">
                                {order.CreatedAt
                                    ? new Date(order.CreatedAt).toLocaleDateString("en-GB")
                                    : "N/A"}
                            </td>

                            <td className="px-4 py-3">
                                <div className="flex items-center justify-center gap-2">
                                    <button
                                        className="rounded-lg bg-green-600/20 p-2 text-green-400 transition-colors hover:bg-green-600/30"
                                        title={t("approve")}
                                        onClick={() => { HandleApprove(order) }}
                                    >
                                        <Check className="h-4 w-4" />
                                    </button>
                                    <button
                                        className="rounded-lg bg-red-600/20 p-2 text-red-400 transition-colors hover:bg-red-600/30"
                                        title={t("delete")}
                                        onClick={() => { HandleOrderDelete(order) }}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}