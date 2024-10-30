"use client";
import { DatePickerWithRange } from "@/components/globals/datePicker/datePicker";
import { useState } from "react";
import Cards from "../../components/dashboard/shopCards";
import { Button } from "@/components/ui/button";

export default function page() {
  const [cards, setCards] = useState([
    { title: "Today’s Orders", count: 257, color: "#0EACD7" },
    { title: "Active Orders", count: 357, color: "#2FD2B7" },
    { title: "Delivered Orders", count: 20, color: "#AA75E8" },
    { title: "Customer Cancelled Orders", count: 0, color: "#F2CD5D" },
    { title: "Total Restaurants", count: 480, color: "#0EACD7" },
    { title: "Categories", count: 560, color: "#2FD2B7" },
    { title: "Total Items", count: 250, color: "#AA75E8" },
    { title: "Promotions", count: 310, color: "#F2CD5D" },
  ]);

  return (
      <div className="w-[90%] m-auto">
        <div>
          <Cards cards={cards} />
        </div>
        <div className="my-10 flex items-center gap-4">
          <DatePickerWithRange className="" />
          <Button className="bg-primary text-white">Filter by Date</Button>
        </div>
      </div>
  );
}
