import Link from "next/link";
import React from "react";

const DashboardHeader = () => {
  const links = [
    {
      name: "Schedule",
      link: "/dashboard",
      id: 1,
    },
    {
      name: "History",
      link: "/history",
      id: 2,
    },
  ];
  return (
    <header>
      <nav className="flex-center fixed top-0 z-50 w-full borber-black-200 py-7 text-white bg-emerald-800">
        <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16 max=md:">
          <Link className="text-fuchsia-600" href="/dashboard">
            Beauty
            <br />
            Admin
          </Link>
          <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10 lg:gap-x-14">
            {links.map((item) => (
              <li>
                <Link
                  href={item.link}
                  key={item.id}
                  className="font-light uppercase sm:text-sm text-base lg:text-lg after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:hover:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
