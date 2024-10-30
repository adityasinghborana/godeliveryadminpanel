"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import clsx from "clsx";
import {
  BikeIcon,
  LayoutDashboard,
  List,
  MegaphoneIcon,
  MenuIcon,
  TruckIcon,
  User2Icon,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Props = {
  defaultOpen?: boolean;
  sidebarLogo?: string;
  details?: any;
  user?: any;
};

const Sidebar = ({ defaultOpen = true }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname(); // Call usePathname here

  const sidebarOpt = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard />,
    },
    { name: "Categories", path: "/dashboard/categories", icon: <List /> },
    { name: "Store", path: "/dashboard/products", icon: <UtensilsCrossed /> },
    { name: "Rider", path: "/dashboard/riders", icon: <BikeIcon /> },
    { name: "Package", path: "/dashboard/", icon: <TruckIcon /> },
    {
      name: "Promotions",
      path: "/dashboard/orders/order",
      icon: <MegaphoneIcon />,
    },
    { name: "Users", path: "/dashboard/users", icon: <User2Icon /> },
    {
      name: "Logout",
      path: "/",
      action: "logout",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openState = useMemo(
    () => (defaultOpen ? { open: true } : {}),
    [defaultOpen]
  );

  if (!isMounted) return null; // Ensure hooks are called before this return

  return (
    <Sheet modal={false} {...openState}>
      <SheetTrigger
        asChild
        className="absolute left-4 top-4 z-[100] md:!hidden felx"
      >
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        showX={!defaultOpen}
        side="left"
        className={clsx(
          "bg-white backdrop-blur-xl fixed h-full top-0 border-r-[1px] p-6",
          {
            "hidden md:inline-block z-0 w-[250px]": defaultOpen,
            "inline-block md:hidden z-[100] w-full": !defaultOpen,
          }
        )}
      >
        <div className="p-4 font-bold ">
          <AspectRatio ratio={16 / 5}>
            <Image
              src="/logo.png"
              alt="Sidebar Logo"
              fill
              className="rounded-md object-contain"
            />
          </AspectRatio>
        </div>
        <nav className="relative">
          <Command className="rounded-lg bg-transparent">
            <CommandList className="py-4 !min-h-[70vh]">
              <CommandEmpty>No Results Found</CommandEmpty>
              <CommandGroup>
                {sidebarOpt.map(({ name, path, icon }) => {
                  const isActive = pathname === path;
                  return (
                    <CommandItem key={name} className="md:w-[320px] w-full">
                      <Link
                        href={path}
                        className={clsx(
                          "flex items-center gap-3 p-2 rounded-md transition-all md:w-full w-full",
                          {
                            "bg-primary": isActive,
                            "hover:bg-primary-foreground": !isActive,
                          }
                        )}
                        aria-label={`Navigate to ${name}`}
                      >
                        {icon}
                        <span>{name}</span>
                      </Link>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
