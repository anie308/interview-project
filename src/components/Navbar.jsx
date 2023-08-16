import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-white shadow p-[10px] h-[80px] lg:px-[30px] flex items-center justify-between">
      <div>
        <Link href="/" className="font-roboto text-[20px] lg:text-[30px] font-[700]">
          <span>Naira</span>
          <span className="text-primary">refill</span>
        </Link>
      </div>
      <div className="flex items-center space-x-[20px]">
        <Link href='/' className="bg-primary text-white text-[12px] font-[600] lg:text-[16px] font-roboto rounded-[5px] p-[8px_15px] lg:p-[8px_25px]">Register</Link>
        <Link href='/' className=" border border-primary font-[600] text-[12px] lg:text-[16px] text-primary  font-roboto rounded-[5px] p-[8px_15px] lg:p-[8px_25px]">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
