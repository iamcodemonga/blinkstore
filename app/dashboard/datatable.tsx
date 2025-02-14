"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
  } from "lucide-react"

type Props = {}

export function Datatable(props: Props) {
    return (
        <>
            <div className="rounded-md border">
                <div className="mt-4 mb-3 mx-4 ">
                    <input type="text" name="" id="" className="w-full lg:w-80 py-2 px-3 border rounded-md outline-none placeholder:text-sm" placeholder="search order" />
                </div>
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead>S/N</TableHead>
                            <TableHead>Receipt</TableHead>
                            <TableHead>Buyer Name</TableHead>
                            <TableHead>Buyer Email</TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="pl-5">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="text-sm">
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>14366357</TableCell>
                            <TableCell className="min-w-28">michael bleen</TableCell>
                            <TableCell>micbleen@email.com</TableCell>
                            <TableCell className="min-w-36">Rich dad poor dad</TableCell>
                            <TableCell>28SOL</TableCell>
                            <TableCell><span className="px-2 py-1 rounded-md bg-green-100 text-green-500">delivered</span></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>17353582</TableCell>
                            <TableCell className="min-w-28">vikov nikolovyskyuv</TableCell>
                            <TableCell>vikovnikolovyskyuv@email.com</TableCell>
                            <TableCell className="min-w-36">Reading between the lines</TableCell>
                            <TableCell>45SOL</TableCell>
                            <TableCell><span className="px-2 py-1 rounded-md bg-green-100 text-green-500">delivered</span></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="mt-5 w-full flex justify-between items-center px-">
                <div className="text-gray-500 text-sm">Page 1 of 5</div>
                <div className="space-x-2 lg:space-x-2 flex">
                    <button type="button" className="px-4 py-1 rounded-md text-sm flex items-center border"><ChevronLeft className="size-4" />prev</button>
                    <button type="button" className="px-4 py-1 rounded-md bg-slate-900 text-white text-sm flex items-center border">next<ChevronRight className="size-4" /></button>
                </div>
            </div>
        </>
    )
}