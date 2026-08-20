"use client";

import {

    Button,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,

} from "@heroui/react";

export default function UsermanageTable({ User }) {
    const users = Array.isArray(User) ? User : [];

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="w-full">
            <h1 className="text-xl md:text-2xl font-semibold mb-4">
                Manage Users
            </h1>

            {/* Table view - md and up */}
            <div className="hidden md:block w-full overflow-x-auto">
                <Table aria-label="User management table" className="min-w-full">
                    <TableHeader>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>EMAIL</TableColumn>
                        <TableColumn>ROLE</TableColumn>
                        <TableColumn>EMAIL VERIFIED</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                        <TableColumn>JOINED</TableColumn>
                        <TableColumn>ACTION</TableColumn>
                    </TableHeader>
                    <TableBody emptyContent="No users found">
                        {users.map((user) => (
                            <TableRow key={user._id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                                            {user.name?.charAt(0)?.toUpperCase()}
                                        </div>

                                        <span className="font-medium">
                                            {user.name}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm text-default-600">
                                        {user.email}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <Chip size="sm" variant="flat" color="primary">
                                        {user.role}
                                    </Chip>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        color={user.emailVerified ? "success" : "warning"}
                                    >
                                        {user.emailVerified ? "Verified" : "Unverified"}
                                    </Chip>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        color={user.isBlocked ? "danger" : "success"}
                                    >
                                        {user.isBlocked ? "Blocked" : "Active"}
                                    </Chip>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm text-default-500">
                                        {formatDate(user.createdAt)}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        size="sm"
                                        variant="flat"
                                        color={user.isBlocked ? "success" : "danger"}
                                    >
                                        {user.isBlocked ? "Unblock" : "Block"}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Card view - below md */}
            <div className="md:hidden flex flex-col gap-3">
                {users.length === 0 && (
                    <p className="text-center text-default-400 py-6">
                        No users found
                    </p>
                )}
                {users.map((user) => (
                    <div
                        key={user._id}
                        className="border border-default-200 rounded-xl p-4 flex flex-col gap-3"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                                    {user.name?.charAt(0)?.toUpperCase()}
                                </div>

                                <span className="font-medium">
                                    {user.name}
                                </span>
                            </div>
                            <Chip
                                size="sm"
                                variant="flat"
                                color={user.isBlocked ? "danger" : "success"}
                            >
                                {user.isBlocked ? "Blocked" : "Active"}
                            </Chip>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Chip size="sm" variant="flat" color="primary">
                                {user.role}
                            </Chip>
                            <Chip
                                size="sm"
                                variant="flat"
                                color={user.emailVerified ? "success" : "warning"}
                            >
                                {user.emailVerified ? "Verified" : "Unverified"}
                            </Chip>
                        </div>

                        <p className="text-xs text-default-400">
                            Joined {formatDate(user.createdAt)}
                        </p>

                        <Button
                            size="sm"
                            variant="flat"
                            color={user.isBlocked ? "success" : "danger"}
                            className="w-full"
                        >
                            {user.isBlocked ? "Unblock" : "Block"}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}