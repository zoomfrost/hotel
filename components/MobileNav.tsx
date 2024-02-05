"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IHeaderData } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const MobileNav = ({ links }: { links: IHeaderData[] }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isDesktop ? null : (
        <Drawer open={open} onOpenChange={setOpen} direction="left">
          <DrawerTrigger className="focus:outline-none">
            <HamburgerMenuIcon height={30} width={30} />
          </DrawerTrigger>
          <DrawerContent className="select-none bg-amber-50 w-3/5 h-full rounded-none">
            <DrawerHeader className="block absolute top-3 right-3 h-5 p-0">
              <Cross1Icon onClick={() => setOpen(false)} />
            </DrawerHeader>
            <DrawerDescription asChild className="paddings">
              <ul className="flex-center select-none flex-col gap-y-5">
                {links.map((item, i) => (
                  <li key={i}>
                    <Link
                      onClick={() => setOpen(false)}
                      href={item.link}
                      key={item.id}
                      className="font-normal uppercase text-lg hover:underline underline-offset-8 "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </DrawerDescription>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default MobileNav;
