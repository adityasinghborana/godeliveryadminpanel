import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/lib/modal.provider";
import { CircleX } from "lucide-react";
import React, { useState } from "react";

interface CustomDialogProps {
  isOpen?: boolean;
  title: string;
  description?: string;
  children: React.ReactNode;
}
const CustomModal = ({ title, children, description }: CustomDialogProps) => {
  const { isOpen, setClose } = useModal();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-3xl md:max-h-[700px] md:h-fit h-screen bg-card">
        <div className="flex justify-between rounded-t-xl items-center mb-4 p-4 bg-[#F2F2F2]">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            className="text-black hover:text-gray-600"
            onClick={() => setClose()}
          >
            <CircleX />
          </button>
        </div>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <div className="p-4 pt-0">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
