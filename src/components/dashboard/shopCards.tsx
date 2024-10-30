"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { BellRing } from "lucide-react";

type CardProps = {
  title: string;
  count: number;
  color: string;
};

export default function Cards({ cards }: { cards: CardProps[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`w-full border-b-4 border-t-0 border-l-0 border-r-0`}
          style={{ borderColor: card.color }}
        >
          <CardHeader>
            <CardTitle>{card?.title}</CardTitle>
            {/* <CardDescription>{card?.count}</CardDescription> */}
              <div className="pt-4 font-medium text-lg">
                {card?.count}
              </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
