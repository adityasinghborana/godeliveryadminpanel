import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {};

const RiderTipModal = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 p-6">
        <div>
          <Label>Tip 1</Label>
          <Input />
        </div>
        <div>
          <Label>Tip 2</Label>
          <Input />
        </div>
        <div>
          <Label>Tip 3</Label>
          <Input />
        </div>
        <div>
          <Label>Tip 4</Label>
          <Input />
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant={"default"} className="tracking-wide font-bold text-white">Submit</Button>
      </div>
    </div>
  );
};

export default RiderTipModal;
