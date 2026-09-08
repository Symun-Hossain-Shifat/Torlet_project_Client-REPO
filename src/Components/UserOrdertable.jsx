import Image from "next/image";




export default function UserOrderTable({ Data }) {
    return (
        <div className="w-full overflow-x-auto rounded-xl border border-gray-800 bg-black p-4">
            <h1 className="mb-4 text-xl font-semibold text-white">
                User Order Table
            </h1>

            <table className="w-full min-w-[900px] border-collapse text-left text-sm text-gray-300">
                <thead>
                    <tr className="border-b border-gray-800 text-xs uppercase tracking-wide text-gray-400">
                        <th className="px-4 py-3">Product</th>
                        <th className="px-4 py-3">Customer</th>
                        <th className="px-4 py-3">Contact</th>
                        <th className="px-4 py-3">Address</th>
                        <th className="px-4 py-3">Qty</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Date</th>

                    </tr>
                </thead>
                <tbody>
                    {Data.map((order) => (
                        <tr
                            key={order._id}
                            className="border-b border-gray-900 hover:bg-gray-900/50"
                        >
                            <td className="flex items-center gap-3 px-4 py-3">
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

                            <td className="px-4 py-3">
                                <div className="text-white">{order.name}</div>
                                <div className="text-xs text-gray-500">
                                    {order.email}
                                </div>
                            </td>

                            <td className="px-4 py-3">{order.mobile}</td>

                            <td className="max-w-[180px] truncate px-4 py-3">
                                {order.address}
                            </td>

                            <td className="px-4 py-3">{order.quantity}</td>

                            <td className="px-4 py-3">${order.price}</td>

                            <td className="px-4 py-3">
                                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
                                    {order.status}
                                </span>
                            </td>

                            <td className="px-4 py-3 text-gray-400">
                                {order.CreatedAt
                                    ? new Date(order.CreatedAt).toLocaleDateString("en-GB")
                                    : "N/A"}
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}