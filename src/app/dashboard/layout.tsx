import Container from "@/components/globals/container/container";
import Sidebar from "@/components/globals/sidebar/page";
import React, { Children } from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="h-screen overflow-hidden">
      <Sidebar />
      <div className="md:pl-[250px] ">
        <div className="relative">
          <div className="p-4">InfoBar</div>
          <Container> {children} </Container>
        </div>
      </div>
    </div>
  );
};

export default layout;
