"use client";

import deletemessage from "@/lib/Action/DeleteData/MessageDelete";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ContactInfoShowingPage({ complaint }) {
    const router = useRouter();


    const handleReply = () => {
        const subject = `Re: Your ${complaint.reason} complaint`;
        const body = `Hi ${complaint.name},\n\nThanks for reaching out about your ${complaint.reason} concern.\n\n---\nYour message:\n"${complaint.message}"\n---\n\n`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            complaint.email
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, "_blank");
    };


    const handleDelete = async (id) => {
        const result = await deletemessage(id);
        if (result.deletedCount === 1) {
            toast.success("Deleted successfully");
            router.refresh()
        }
        else {
            toast.error("Failed to delete");
        }
    };
    return (
        <div className="w-full my-4 mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        {complaint.name}
                    </h2>
                    <p className="text-sm text-gray-500">{complaint.email}</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-red-50 text-red-600 rounded-full capitalize">
                    {complaint.reason}
                </span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
                {complaint.message}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">
                    {new Date(complaint.CreatedAt).toLocaleString()}
                </span>

                <div className="flex items-center gap-2">

                    <button
                        onClick={() => handleDelete(complaint._id)}
                        className="group flex items-center gap-2 px-4 py-2 bg-white text-red-600 border border-red-200 text-sm font-medium rounded-lg hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-md active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Trash2 className="w-4 h-4 transition-transform duration-200 group-hover:rotate-6" />
                        Delete
                    </button>

                    <button
                        onClick={handleReply}
                        className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Reply via Gmail
                    </button>
                </div>
            </div>
        </div>
    );
}