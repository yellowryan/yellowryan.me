import { Button } from "./ui/button";
import NavBar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      {/* logo placeholder */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl text-[#FFFDCB]">Ryan</h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
