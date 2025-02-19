
import Image from "next/image";
import Link from "next/link";
import SignInOut from "./auth/SignInOut";
import Icon from "../public/icon1.png"
const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image
              src={Icon}
              alt="Eventry"
              width={50}
              height={0} />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li><SignInOut /></li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
