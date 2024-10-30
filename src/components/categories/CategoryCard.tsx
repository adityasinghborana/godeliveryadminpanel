import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import React from "react";

type CategoryCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  deleteMode: boolean;  
  isSelected: boolean; 
  onSelect: () => void;
};

const CategoryCard = ({
  title,
  description,
  imageSrc,
  deleteMode,
  isSelected,
  onSelect,
}: CategoryCardProps) => {
  return (
    <div className="min-[1800px]:w-96 w-62 bg-white mt-6 space-y-10 rounded-lg">
      <div className="relative">
      {deleteMode && (
        <input
          type="checkbox"
          className="absolute top-2 left-2 h-5 w-5"
          checked={isSelected}
          onChange={onSelect}
        />
      )}
      <Image src={imageSrc} alt={title} width={600} height={600} />
      </div>
      <div className="px-4 pb-4">
        <div className="flex justify-between">
          <div className="font-bold">{title}</div>
          {!deleteMode && (
            <div>
              <Switch />
            </div>
          )}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
