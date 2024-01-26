import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between bode-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-1 max-md:flex-col">
      <p>Copyright © 2023 Guest House on Baskov | All rights reserved</p>
      <div className="flex gap-x-9">
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
