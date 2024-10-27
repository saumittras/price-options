import { useState } from "react";
import Link from "../Link/Link";
import { FaBeer } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
      <div onClick={() => setOpen(!open)}>
        {open == true ? (
          <IoCloseSharp className="text-2xl md:hidden" />
        ) : (
          <IoIosMenu className="text-2xl md:hidden"></IoIosMenu>
        )}
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
