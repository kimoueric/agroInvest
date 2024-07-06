import React from "react";
import { BsMoonFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-end p-2 md:p-1">
      <BsMoonFill size={50} color="#fff" className="w-[40px] md:hidden" />
    </div>
  );
}
