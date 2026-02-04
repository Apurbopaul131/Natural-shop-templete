import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../../assets/logo-header.png";
const Navbar = () => {
  return (
    <div className="md:container w-[90%] mx-auto flex items-center justify-between text-xl text-[#111111] pt-6">
      <div>
        <Image src={Logo} alt="logo-image" width={150} height={60}></Image>
      </div>
      <ul className="md:flex md:items-center md:justify-between md:space-x-4 hidden">
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className="md:flex md:items-center md:space-x-4 hidden">
        <IoSearchOutline className="h-6 w-6" />
        <HiOutlineShoppingCart className="h-6 w-6" />
        <button className="px-7 py-2 border-2 border-[#179800] rounded-md">
          Login
        </button>
        <button className="px-7 py-2 bg-[#179800] rounded-md text-white">
          Register
        </button>
      </div>
      <div className="block md:hidden">
        <IoMdMenu className="text-[#179800] md:w-8 md:h-8 w-12 h-12" />
      </div>
    </div>
  );
};

export default Navbar;
