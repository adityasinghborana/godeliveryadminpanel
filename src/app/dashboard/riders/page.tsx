"use client";
import { CreateRiderForm } from "@/components/forms/createRider";
import { DataTable } from "@/components/globals/dataTable/dataTable";
import CustomModal from "@/components/globals/modal/customModal";
import RiderTipModal from "@/components/modals/riderTipModal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useModal } from "@/lib/modal.provider";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const { setOpen } = useModal();
  const data = [
    {
      id: 1,
      name: "John Doe",
      img: "/user.png",
      email: "y9Z2p@example.com",
      number: "1234567890",
      licenceNumber: "1234567890",
      orderCompleted: "300",
      revenue: "5000000000000",
      status: true,
      joinedOn: "2022-01-01",
    },
    {
      id: 2,
      name: "John Doe",
      img: "/user.png",
      email: "y9Z2p@example.com",
      number: "1234567890",
      licenceNumber: "1234567890",
      orderCompleted: "150",
      revenue: "5000000000000",
      status: false,
      joinedOn: "2022-01-01",
    },
    {
      id: 3,
      name: "John Doe",
      img: "/user.png",
      email: "y9Z2p@example.com",
      number: "1234567890",
      licenceNumber: "1234567890",
      orderCompleted: "150",
      revenue: "5000000000000",
      status: true,
      joinedOn: "2022-01-01",
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
      accessorKey: "number",
      header: "Phone Number",
      cell: ({ row }) => (
        <div className="capitalize text-center">{row.getValue("number")}</div>
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
      accessorKey: "licenceNumber",
      header: "Licence Number",
      cell: ({ row }) => (
        <div className="capitalize text-center">
          {row.getValue("licenceNumber")}
        </div>
      ),
    },
    {
      accessorKey: "orderCompleted",
      header: "Order Complete",
      cell: ({ row }) => (
        <div className={`capitalize text-center`}>
          {row.getValue("orderCompleted")}
        </div>
      ),
    },
    {
      accessorKey: "revenue",
      header: "Revenue",
      cell: ({ row }) => (
        <div className={`capitalize text-center`}>
          {row.getValue("revenue")}
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
            <Button className="p-4" variant="default" onClick={() => {}}>
              Edit
            </Button>
          </div>
        );
      },
    },
  ];

  const createRiderTip = () => {
    setOpen(
      <CustomModal title="Rider Tip">
        <RiderTipModal />
      </CustomModal>
    )
  };

  return (
    // <div className="p-5 rounded-2xl">
    //   <div className="flex justify-between items-center">
    //     <div className="flex justify-start gap-4 mb-4">
    //       <div className="items-center content-end">
    //         <div className="bg-white border-2 rounded-lg py-2 px-4 flex justify-between gap-6">
    //           <div>Total Rider: 125</div>
    //           <div>
    //             <span className="text-green-500">Active:</span> 100
    //           </div>
    //           <div>
    //             <span className="text-yellow-500">Inactive:</span> 25
    //           </div>
    //         </div>
    //       </div>
    //       <div className="min-w-72">
    //         <Label htmlFor="location" className="ml-1 text-[#4D5464]">
    //           Rider Location
    //         </Label>
    //         <div className="min-h-10">
    //           <div className="bg-white mt-1">
    //             <Select name="location">
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Select a location" />
    //               </SelectTrigger>
    //               <SelectContent>
    //                 <SelectItem value="location1">Location 1</SelectItem>
    //                 <SelectItem value="location2">Location 2</SelectItem>
    //                 <SelectItem value="location3">Location 3</SelectItem>
    //               </SelectContent>
    //             </Select>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex gap-4 justify-between">
    //       <Button variant="default" onClick={createRiderTip}>Rider Tip</Button>
    //       <Button variant="default" onClick={() => {} } >Create Rider</Button>
    //     </div>
    //   </div>
    //   <DataTable columns={columns} data={data} filterField="number" />;
    // </div>
    <CreateRiderForm />
  );
};

export default page;
