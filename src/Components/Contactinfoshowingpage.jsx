"use client";

export default function ContactInfoShowingPage({ complaint }) {
    const handleReply = () => {
        const subject = `Re: Your ${complaint.reason} complaint`;
        const body = `Hi ${complaint.name},\n\nThanks for reaching out about your ${complaint.reason} concern.\n\n---\nYour message:\n"${complaint.message}"\n---\n\n`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            complaint.email
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, "_blank");
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

                <button
                    onClick={handleReply}
                    className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                    Reply via Gmail
                </button>
            </div>
        </div>
    );
}