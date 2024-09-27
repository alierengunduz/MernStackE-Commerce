import { assets } from "../../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import { Badge } from "antd";
import Navbar from "../navbar/Navbar";
import DropdownProfile from "../dropdownProfile/DropdownProfile";
import { FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useState } from "react";
import MobileMenu from "../mobileMenu/MobileMenu";
import Search from "../search/Search";
import { CiUser } from "react-icons/ci";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  const cartItems = useSelector((state: RootState) => state.carts.cart);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Scroll olayını dinleyerek arka plan rengini değiştirme
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      data-aos="fade-right"
      className={`flex items-center justify-between py-5 px-10 font-medium sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-gray-600 text-white" : "bg-white text-black"
      }`}
    >
      <img src={assets.star_icon} alt="" />
      <Navbar isScrolled={isScrolled} />
      <div className="flex items-center gap-3">
        <Search isScrolled={isScrolled} />
        <div>
          {user ? (
            <DropdownProfile />
          ) : (
            <NavLink to="/login">
              <CiUser className="w-6 h-6 cursor-pointer" />
            </NavLink>
          )}
        </div>
        <NavLink to="/cart" className="relative">
          <Badge
            count={cartItems.length}
            showZero
            style={{ backgroundColor: "#52c41a" }}
          >
            <FaShoppingBasket
              className={`
             w-6 h-6 cursor-pointer
             ${isScrolled ? "text-white" : "text-black"}
            `}
            />
          </Badge>
        </NavLink>
        <FaBarsStaggered
          className="md:hidden w-6 h-6 cursor-pointer"
          onClick={toggleDrawer}
        />
      </div>
      {/* mobile menu  */}
      <MobileMenu open={open} onClose={toggleDrawer} />
    </div>
  );
};

export default Header;
