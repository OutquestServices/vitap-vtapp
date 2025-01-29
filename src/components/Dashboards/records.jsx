'use client'
import React, { useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import { motion } from "framer-motion";
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { generateToken } from '@/lib/jwttoken';


export default function Registrations() {
    const [data, setData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalParticipants, setTotalParticipants] = useState(0);
    const [todayParticipants, setTodayParticipants] = useState(0);
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const generated_token = generateToken(session?.user, 60 * 60 * 24);

                const response = await fetch('/api/fetch/registrations', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.NEXT_API_TOKEN}`,
                        'Token': generated_token
                    }
                });
                if (response.status !== 200) {
                    throw new Error('There was an error occurred Please refresh the page');
                }
                const result = await response.json();
                setData(result?.data);

                // Calculate totals
                const total = result.data.reduce((acc, curr) => acc + parseFloat(curr.amountPaid), 0);
                const participants = result.data.length;
                const today = new Date().toISOString().slice(0, 10);
                const registeredToday = result.data.filter(item => item.purchasedDate.startsWith(today)).length;

                setTotalAmount(total);
                setTotalParticipants(participants);
                setTodayParticipants(registeredToday);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [session]);

    const columns = React.useMemo(() => [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Designation', accessor: 'designation' },
        { Header: 'Event Date', accessor: 'eventDate' },
        { Header: 'Event Ticket', accessor: 'eventTicket' },
        { Header: 'Amount Paid', accessor: 'amountPaid' },
        { Header: 'Purchased Date', accessor: 'purchasedDate' },
        { Header: 'Invoice ID', accessor: 'invoiceId' },
        { Header: 'Order ID', accessor: 'orderId' },
        { Header: 'Receipt ID', accessor: 'receiptId' },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page, // Instead of rows, use page
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: 10 } }, usePagination);

    if (status === "loading") {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <motion.div
                    className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                ></motion.div>
            </div>
        );
    }

    if (!session) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
                <p className="text-xl text-gray-300">
                    You are not authenticated. Please sign in.
                </p>
                <button
                    onClick={() =>
                        signIn("google", { callbackUrl: "/auth/role-bridge" })
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Sign In
                </button>
            </motion.div>
        );
    }

    if (session?.user?.role !== "admin") {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Unauthorized</h1>
                <p className="text-xl text-gray-300">
                    You are not authorized to view this page.
                </p>
                <Link
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Return to Home
                </Link>
            </motion.div>
        );
    }

    if (data.length === 0) {
        return (
            <div className="flex items-center justify-center md:h-[60vh]">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-5 text-center md:px-18 lg:px-24">
            <h1 className="font-bold p-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Registered People</h1>
            <div className="font-bold text-xl mb-4 flex flex-col relative items-start py-6 gap-3">
                <p>Total Amount Generated: ₹{totalAmount.toFixed(2)}</p>
                <p>Total Participants: {totalParticipants}</p>
                <p>Participants Registered Today: {todayParticipants}</p>
            </div>
            <div className="overflow-x-auto">
                <table {...getTableProps()} className="w-full border-collapse">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className="px-4 py-2 border-b-2 border-gray-600 bg-gray-800 text-left font-bold">
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className="px-4 py-2 border-b border-gray-600 bg-gray-700 text-left">
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
            <div className="pagination flex gap-4 relative items-center justify-center p-8">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className='border rounded-sm px-1 hover:bg-white hover:text-black'>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage} className='border rounded-sm px-1 hover:bg-white hover:text-black'>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage} className='border rounded-sm px-1 hover:bg-white hover:text-black'>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className='border rounded-sm px-1 hover:bg-white hover:text-black'>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value));
                    }}
                    className='bg-black text-white border rounded-sm p-1'
                >
                    {[10, 20, 50, 100].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
