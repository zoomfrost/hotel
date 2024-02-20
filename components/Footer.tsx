import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white-800 flex items-center justify-around bode-text w-full gap-y-10 border-t border-black-400 bg-gray-600 paddings max-md:flex-col">
      <p>Гостевой дом Басков, 2024</p>
      <div className="flex gap-x-9">
        <Link target="_blank" href="/privacy">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
