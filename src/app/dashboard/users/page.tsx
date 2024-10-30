"use client";
import { DataTable } from "@/components/globals/dataTable/dataTable";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const data = [
    {
      id: 1,
      name: "John Doe",
      img: "/user.png",
      email: "y9Z2p@example.com",
      number: "1234567890",
      otpVerfied: true,
      status: true,
      joinedOn: '2022-01-01'
    },
    {
      id: 2,
      name: "John Doe",
      img: "/user.png",
      email: "y9Z2p@example.com",
      number: "1234567890",
      otpVerfied: true,
      status: false,
      joinedOn: '2022-01-01'
    },
    {
      id: 3,
      name: "John Doe",
      img: "/user.png",
      email: "y9Z2p@example.com",
      number: "1234567890",
      otpVerfied: false,
      status: true,
      joinedOn: '2022-01-01'
    },
  ];

  const columns: ColumnDef<any>[] = [
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && true)
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
    {
      accessorKey: "id",
      header: "Id",
      cell: ({ row }) => (
        <div className="capitalize text-center">{row.getValue("id")}</div>
      ),
    },
    {
      accessorKey: "img",
      header: "Image",
      cell: ({ row }) => (
        <div className="flex justify-center">
            <Image           
              src={row.getValue("img")}
              alt="image"
              width={50}
              height={150}
            />
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="capitalize text-center">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="lowercase text-center">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "number",
      header: "Phone",
      cell: ({ row }) => (
        <div className="capitalize text-center">{row.getValue("number")}</div>
      ),
    },
    {
      accessorKey: "otpVerfied",
      header: "OTP Verified",
      cell: ({ row }) => (
        <div
          className={`${
            row.getValue("otpVerfied") ? "text-green-500" : "text-red-600"
          } capitalize text-center`}
        >
          {row.getValue("otpVerfied") ? "yes" : "no"}
        </div>
      ),
    },
    {
      accessorKey: "joinedOn",
      header: "Joined On",
      cell: ({ row }) => (
        <div
          className={`capitalize text-center`}
        >
          {new Date(row.getValue("joinedOn")).toDateString()}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="capitalize text-center">
          <Switch defaultChecked={row.getValue("status")} />
        </div>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: any) => {
        return (
          <div className="text-center">
            <Button className="p-4" variant="destructive" onClick={() => {}}>
              Block
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="p-5 rounded-2xl">
      <div className="flex justify-start gap-4 mb-4">
      <div className="bg-white border-2 rounded-lg py-2 px-4">Total Users: 90</div>
      <div className="bg-white border-2 rounded-lg py-2 px-4">Users Added Last Week: 10</div>
      </div>
      <DataTable columns={columns} data={data} filterField="number" />;
    </div>
  );
};

export default page;
