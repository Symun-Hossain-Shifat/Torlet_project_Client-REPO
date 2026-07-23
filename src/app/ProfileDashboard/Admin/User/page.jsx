import Link from "next/link";
import { Users } from "lucide-react";

export default function UserManagement() {
    return (
        <section className="container mx-auto px-4 py-10">
            {/* Page Heading */}
            <div className="mb-10  pb-4">
                <h1 className="text-3xl font-bold text-orange-500">
                    User Management
                </h1>
                <p className="mt-2 text-gray-500">
                    View, manage, and monitor all registered users from one place.
                </p>
            </div>

            {/* Empty State */}
            <div className="flex min-h-[55vh] items-center justify-center">
                <div className="max-w-md text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
                        <Users className="h-12 w-12 text-blue-500" />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                        No Users Found
                    </h2>

                    <p className="mt-3 leading-relaxed text-gray-500">
                        There are currently no registered users to display. Once users
                        create an account, they will appear here for management.
                    </p>

                    <Link
                        href="/ProfileDashboard/Admin"
                        className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </section>
    );
}